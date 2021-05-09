import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";
import removeVietnamese from "../../common/Utilities/ConvertViString";
import Notification from "./Notification";

const useForm = () => {
  const [values, setValues] = useState({});
  const [isNew, setIsNew] = useState(true);
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [urlForm, setUrlForm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your url for API
      axios
        .post(urlForm, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        })
          .catch((err) => {
            Notification('error', 'Lỗi', 'Nhập lại bản ghi.');
          })
      ;

  };

  useEffect(() => {
    if (shouldSubmit) {
      setValues({});
      setIsNew(true);
      Notification('success', 'Thành công', 'Thêm bản ghi thành công.');
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    console.log(event.target)
    setValues((values) => ({
      ...values,
      [event.target.id]: event.target.value,
    }));
    if (event.target.alt) {
      setValues((values) => ({
        ...values,
        [event.target.alt]: removeVietnamese(event.target.value),
      }));
    }
    setErrors((errors) => ({ ...errors, [event.target.id]: "" }));
  };



  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    shouldSubmit,
    setShouldSubmit,
    setUrlForm,
    setValues,
    isNew,
    setIsNew
  };
};

export default useForm;
