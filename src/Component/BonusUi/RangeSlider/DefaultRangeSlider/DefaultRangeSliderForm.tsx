import { useState } from "react";
import { Col, Form, FormGroup, Row } from "reactstrap";
import { Range, getTrackBackground } from "react-range";

const DefaultRangeSliderForm = () => {
  const [values, setValues] = useState([550]);
  return (
    <Form className="theme-form form-label-align-right range-slider">
      <FormGroup>
        <Row className="py-1">
          <Col md="10">
            <div style={{ color: "var(--theme-default)" }} className="d-flex justify-content-center flex-wrap">
              <Range
                values={values}
                step={1}
                min={100}
                max={1000}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px" }} className="d-flex w-100" >
                    <output className="mt-2 me-2">100</output>
                    <div
                      ref={props.ref}
                      className="rounded-2 w-100"
                      style={{
                        height: "10px",
                        background: getTrackBackground({
                          values: values,
                          colors: ["var(--theme-default)", "#ccc"],
                          min: 100,
                          max: 1000,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                    <output className="mt-2 ms-2">1000</output>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      ...props.style,
                      height: "3px",
                      width: "3px",
                      backgroundColor: "#FFF",
                      boxShadow: "0px 2px 6px #AAA",
                    }}
                  >
                    <div style={{ height: "20px", width: "5px", backgroundColor: "var(--theme-default)" }} />
                  </div>
                )}
              />
              <output id="output" className="mt-3"> {values[0]}</output>
            </div>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default DefaultRangeSliderForm;
