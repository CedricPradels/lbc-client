import React, { useState, useRef, useCallback } from "react";

import Cookies from "js-cookie";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import { useHistory } from "react-router-dom";

import Form from "../../molecules/Form";
import InputBlock from "../../molecules/InputBlock";
import InputFile from "../../atoms/InputFile";

interface Props {}

const PUBLISH = gql`
  mutation Publish(
    $pictures: [String]
    $token: String
    $title: String
    $description: String
    $price: Int
  ) {
    publish(
      pictures: $pictures
      token: $token
      title: $title
      description: $description
      price: $price
    ) {
      title
      id
    }
  }
`;

const randomTo = (max: number): number => Math.floor(Math.random() * max);

const randomPictures = (): string[] =>
  Array.from(
    Array(randomTo(3)),
    () =>
      `https://i.picsum.photos/id/${randomTo(50)}/${randomTo(500)}/${randomTo(
        500
      )}.jpg`
  );

const PublishForm: React.FC<Props> = () => {
  const history = useHistory();

  const token = Cookies.get("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // const [pictures, setPictures] = useState<any>();
  const picturesRef = useRef(null);

  const resetFields = useCallback(() => {
    setTitle("");
    setDescription("");
    setPrice("");
  }, []);

  const [publish, { loading }] = useMutation(PUBLISH, {
    onCompleted: (data) => {
      if (data.publish === null) {
        resetFields();
      } else {
        history.push(`/offer/${data.publish.id}`);
      }
    },
  });

  return (
    <Form
      title="Déposer une annonce"
      button="Valider"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          publish({
            variables: {
              token,
              title,
              description,
              price: Number(price),
              pictures: randomPictures(),
            },
          });
        } catch (error) {
          console.log(error);
        }
      }}
      loading={loading}
    >
      <InputBlock
        title="Titre de l'annonce *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <InputBlock
        title="Texte de l'annonce *"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="textarea"
      />
      <InputBlock
        title="Prix *"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
      />
      {/* <label>
        upload
        <InputFile
          ref={picturesRef}
          onChange={(e) => setPictures(e.target.files)}
        />
      </label> */}
    </Form>
  );
};

export default PublishForm;
