import { Row, Col } from "reactstrap";
import { FieldArray } from "formik";
import TimeslotForm from "./TimeslotForm";
import { useState } from "react";
import { timeSlotValues } from "../../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";

function Timeslot(props: any) {
  const { title, errors, submitErrors } = props;

  const [timeslotFormCount, setTimeslotFormCount] = useState<any>([]);

  const addFormHandler = (arrayHelpers: any) => {
    const value = timeslotFormCount.length + 1;
    setTimeslotFormCount((oldArray: any) => [...oldArray, value]);
    arrayHelpers.push(timeSlotValues)
  };

  const removeFormHandler = (
    value: string,
    arrayHelpers: any,
    index: number
  ) => {
    const updatedFormCount = timeslotFormCount.filter((item: string) => item !== value);
    setTimeslotFormCount(updatedFormCount);
    arrayHelpers.remove(index);
  };

  return (
    <FieldArray
      name={title.toLowerCase()}
      render={(arrayHelpers) => {
        return (
          <>
            <Row className="border-bottom mb-3">
              <Col sm="12" className="mb-3">
                <h4>{title}</h4>
              </Col>
              <Col sm="12" className="mb-3">
                {timeslotFormCount.map((timeslot: string, index: number) => {
                  return (
                    <TimeslotForm
                      key={index}
                      index={index}
                      value={timeslot}
                      removeFormHandler={removeFormHandler}
                      errors={errors}
                      title={title}
                      arrayHelpers={arrayHelpers}
                      submitErrors={submitErrors}
                    />
                  );
                })}
              </Col>
              <Col sm="12" className="mb-3">
                <span
                  className="btn btn-outline-dark"
                  onClick={() => addFormHandler(arrayHelpers)}
                >
                  Add Slot
                </span>
              </Col>
            </Row>
          </>
        );
      }}
    />
  );
}

export default Timeslot;
