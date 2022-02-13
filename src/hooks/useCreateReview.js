import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    mutate({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating: Number(rating),
          text,
        },
      },
    });
  };

  return [createReview, result];
};

export default useCreateReview;
