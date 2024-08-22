import { Field } from "formik";

const answerInputOptions = [
  {
    label: "1 line Text",
    value: "1",
  },
  {
    label: "Long Text",
    value: "2",
  },
  {
    label: "Decimal",
    value: "3",
  },
  {
    label: "Integer",
    value: "4",
  },
  {
    label: "Star Rating: 1 to 5",
    value: "5",
  },
  {
    label: "Rating: 1 to 10",
    value: "6",
  },
  {
    label: "Slider: 1 to 100",
    value: "7",
  },
  {
    label: "Toggle Button: Yes / No",
    value: "8",
  },
  {
    label: "Multi Select Drop down",
    value: "9",
  },
  {
    label: "Single Select Drop down",
    value: "10",
  },
  {
    label: "Radio Buttons: Single Select",
    value: "11",
  },
  {
    label: "Check Boxes: Multi Select",
    value: "12",
  },
  {
    label: "Past Single Date",
    value: "13",
  },
  {
    label: "Future Single Date",
    value: "14",
  },
  {
    label: "Past Date Range",
    value: "15",
  },
  {
    label: "Future Date Range",
    value: "16",
  },
  {
    label: "Gender Drop Down",
    value: "17",
  },
  {
    label: "Currency Drop Down",
    value: "18",
  },
  {
    label: "Language: Single Select Drop Down",
    value: "19",
  },
  {
    label: "Languages: Multi Select Drop Down",
    value: "20",
  },
  {
    label: "Country: Single Selectdrop Down",
    value: "21",
  },
  {
    label: "Countries: Multi Select Drop Down",
    value: "22",
  },
  {
    label: "Day: Single Select Drop Down",
    value: "23",
  },
  {
    label: "Days: Multi Select Drop Down",
    value: "24",
  },
  {
    label: "Month: Single Select Drop Down",
    value: "25",
  },
  {
    label: "Months: Multi Select Drop Down",
    value: "26",
  },
  {
    label: "Past Year: Single Select Drop Down",
    value: "26",
  },
  {
    label: "Past Years: Multi Select Drop Down",
    value: "27",
  },
  {
    label: "Future Year: Single Select Drop Down",
    value: "28",
  },
  {
    label: "Future Years: Multi Select Drop Down",
    value: "29",
  },
  {
    label: "Education Classification: Single Drop Down",
    value: "30",
  },
  {
    label: "Education E: Single Drop Down",
    value: "31",
  },
  {
    label: "Profession Drop Down",
    value: "32",
  },
  {
    label: "Tagging",
    value: "33",
  },
];

function AnswerInput(props: any) {
  return (
    <Field as="select" name={props.name} className={props.className}>
      <option value={""}>Select answer input</option>
      {
        answerInputOptions.map((item) => { 
           return <option key={item.value} value={item.value}>{item.label}</option>
         })
      }
    </Field>
  );
}

export default AnswerInput;
