import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const Type = {
    relevant_type: "General",
    email: "dasfasd",
    mobile: 234243,
  };

  const parent = {
    parent_details: {
      father_details: {
        email: "sdf@gmail.com",
        first_name: "afds",
        income: "sad",
        last_name: "asd",
        mobile_no: "423",
        occupation: "fgd",
        work: "sd",
      },
      mother_details: {
        email: "he@gmail.com",
        first_name: "asdf",
        income: "sd",
        last_name: "sdf",
        mobile_no: "234",
        occupation: "sdf",
        work: "sdf",
      },
    },
  };

  const student = {
    student_details: {
      Applicantphoto: "C:\\fakepath\\SCHEMAS.txt",
      aadhar_card: "C:\\fakepath\\SCHEMAS.txt",
      aadhar_no: "324",
      ageproof: "C:\\fakepath\\SCHEMAS.txt",
      blood_group: "A-",
      board: "female",
      class: "1",
      community: "male",
      distance: "324",
      date: "Thu Jul 14 2022 18:33:23 GMT+0530 (India Standard Time)",
      extra_curricular: "sdfs",
      first_name: "afds",
      gender: "female",
      height: "324",
      last_name: "fd",
      mother_tongue: "asdd",
      nationality: "sdf",
      prof_in_sports: "daf",
      religion: "christian",
      special_eads: "sd",
      weight: "234",
    },
  };

  const address = {
    address: {
      communication_address: {
        address_1: "asf",
        address_2: "sdf",
        city: "dsf",
        pin_code: 342,
        state: "sdf",
      },
      permanent_address: {
        address_1: "asf",
        address_2: "sdf",
        city: "dsf",
        pin_code: 342,
        state: "sdf",
      },
    },
  };

  const bulk = {
    parent_details: {
      father_details: {
        email: "sdf@gmail.com",
        first_name: "afds",
        income: "sad",
        last_name: "asd",
        mobile_no: "423",
        occupation: "fgd",
        work: "sd",
      },
      mother_details: {
        email: "he@gmail.com",
        first_name: "asdf",
        income: "sd",
        last_name: "sdf",
        mobile_no: "234",
        occupation: "sdf",
        work: "sdf",
      },
    },
    relevant_type: "General",
    email: "dasfasd",
    mobile: 234243,
    student_details: {
      Applicantphoto: "C:\\fakepath\\SCHEMAS.txt",
      aadhar_card: "C:\\fakepath\\SCHEMAS.txt",
      aadhar_no: "324",
      ageproof: "C:\\fakepath\\SCHEMAS.txt",
      blood_group: "A-",
      board: "female",
      class: "1",
      community: "male",
      distance: "324",
      date: "Thu Jul 14 2022 18:33:23 GMT+0530 (India Standard Time)",
      extra_curricular: "sdfs",
      first_name: "afds",
      gender: "female",
      height: "324",
      last_name: "fd",
      mother_tongue: "asdd",
      nationality: "sdf",
      prof_in_sports: "daf",
      religion: "christian",
      special_eads: "sd",
      weight: "234",
    },
    address: {
      communication_address: {
        address_1: "asf",
        address_2: "sdf",
        city: "dsf",
        pin_code: 342,
        state: "sdf",
      },
      permanent_address: {
        address_1: "asf",
        address_2: "sdf",
        city: "dsf",
        pin_code: 342,
        state: "sdf",
      },
    },
  };
  const onFinish = (data) => {
    axios.post("http://192.168.0.112:3002/user/create", data);
  };
  return (
    <div className="App">
      <button onClick={() => onFinish(Type)}>Type</button>
      <button onClick={() => onFinish(student)}> student</button>
      <button onClick={() => onFinish(parent)}>parent</button>
      <button onClick={() => onFinish(address)}>Address</button>
      <button onClick={() => onFinish(bulk)}>bulk</button>
    </div>
  );
}

export default App;
