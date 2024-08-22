import { useState } from "react";
import "./TagsInput.scss";
import { Field } from "formik";
function TagsInput(props: any) {
  const [tags, setTags] = useState(props?.tags || []);
  const [value, setValue] = useState("");

  const removeTags = (indexToRemove: number) => {
    setTags([
      ...tags.filter((_: any, index: number) => index !== indexToRemove),
    ]);
    props.setFieldValue(props.name,[
      ...tags.filter((_: any, index: number) => index !== indexToRemove),
    ].toString());
  };

  const addTags = (event: any) => {
    if (value !== "" && tags.length < 10) {
      setTags([...tags, value]);
      props.setFieldValue(props.name, [...tags, value].toString());
      setValue("");
    }
  };

  const tagsHandler = (event: any) => {
    let value = event.target.value;
    if (value?.charAt(value?.length - 1) !== "." && tags.length < 10) {
      setValue(event.target.value);
    }
  };

  return (
    <>
      <div className={`tags-input ${props.className}`}>
        <ul id="tags">
          {tags.map((tag: any, index: number) => (
            <li key={index} className="tag bg-primary">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <Field
          name="tagsinput"
          type="text"
          value={value}
          onKeyUp={(event: any) =>
            event.key === "Enter" || event.key === "." ? addTags(event) : null
          }
          onChange={tagsHandler}
          placeholder={props.placeholder}
        />
        <Field name={props.name} type="hidden" />
      </div>
      <span className="text-muted small">* Press Enter or dot to add keywords ({tags.length}/10)</span>
    </>
  );
}

export default TagsInput;
