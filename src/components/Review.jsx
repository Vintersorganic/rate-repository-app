import { Formik } from "formik";
import { View } from "react-native";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import ReviewForm from "./ReviewForm";
import useCreateReview from "../hooks/useCreateReview";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner username is required."),
  repositoryName: yup.string().required("Repository name is required."),
  rating: yup.number().min(0).max(100).required("Rating is required."),
  text: yup.string(),
});

const Review = () => {
  const navigate = useNavigate();
  const [createReview, result] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    
    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      if (data.createReview.repositoryId) {
        navigate("/repository/" + data.createReview.repositoryId);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default Review;
