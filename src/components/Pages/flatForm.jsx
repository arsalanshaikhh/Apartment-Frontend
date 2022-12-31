import "../../styles/flatform.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
export const FlatForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    block: "",
    flat_number: "",
    type: "",
    image: "",
    residents: "",
    name: "",
    gender: "",
    age: "",
  });

  // validation part
  const [block, setBlock] = useState("");
  const [flat_number, setFlat_number] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [residents, setResidents] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      block.length === 0 ||
      flat_number.length === 0 ||
      type.length === 0 ||
      image.length === 0 ||
      residents.length === 0 ||
      name.length === 0 ||
      gender.length === 0 ||
      age.length === 0
    ) {
      setError(true);
      // var element = document.getElementsByTagName("input");
      // element.style.marginBottom = "0px";
      // element.style.borderC = "red";
      document.querySelectorAll(".border").style.border = "thick solid #0000FF";
    }

    axios
      .post("https://apartmentauth.herokuapp.com/flat", formData)
      .then(() => {
        // alert("Flat added succussfully");
        swal("Flat added succussfully!", "", "success");
        setFormData({
          block: "",
          flat_number: "",
          type: "",
          image: "",
          residents: "",
          name: "",
          gender: "",
          age: "",
        });
        navigate("/flat");
      });
  };
  return (
    <div className="overall">
      <p className="paragraph"> Add flat</p>
      <div className="parent">
        <form onSubmit={handleSubmit}>
          <input
            className="border"
            type="text"
            value={formData.block}
            onChange={(e) => {
              setBlock(e.target.value);
              handleChange(e);
            }}
            id="block"
            placeholder="Block"
          />
          <br />
          {/* vaidation */}
          {error && block.length <= 0 ? (
            <label className="validRes">Block feild should not be empty</label>
          ) : (
            ""
          )}
          <input
            className="border"
            type="number"
            value={formData.flat_number}
            onChange={(e) => {
              setFlat_number(e.target.value);
              handleChange(e);
            }}
            id="flat_number"
            placeholder="Flat Number"
            // we have 1 - 100 flat only
            min="1"
            max="100"
          />
          <br />
          {/* vaidation */}
          {error && flat_number.length <= 0 ? (
            <label className="validRes">
              Flat Number feild must be 1 to 100
            </label>
          ) : (
            ""
          )}
          {/* <input
            className="border"
            type="text"
            value={formData.type}
            onChange={(e) => {
              setType(e.target.value);
              handleChange(e);
            }}
            id="type"
            placeholder="Owner / Tenant"
            pattern="[Oo]wner|[Tt]enant"
          />
          <br /> */}
          {/* gfhggggggggggggggggg */}
          <select
            className="border"
            type="text"
            value={formData.type}
            onChange={(e) => {
              setType(e.target.value);
              handleChange(e);
            }}
            id="type"
          >
            <option value="">Select Owner / Tenant</option>
            <option value="owner">Owner</option>
            <option value="tenant">Tenant</option>
          </select>

          {/* vaidation */}
          {error && type.length <= 0 ? (
            <label className="validRes">Type must be owner or tenant</label>
          ) : (
            ""
          )}
          <input
            className="border"
            type="text"
            value={formData.image}
            onChange={(e) => {
              setImage(e.target.value);
              handleChange(e);
            }}
            id="image"
            placeholder="Image"
          />
          <br />
          {/* vaidation */}
          {error && image.length <= 0 ? (
            <label className="validRes">Please enter valid Url</label>
          ) : (
            ""
          )}
          <input
            className="border"
            type="number"
            value={formData.residents}
            onChange={(e) => {
              setResidents(e.target.value);
              handleChange(e);
            }}
            id="residents"
            placeholder="Number of Residence"
            min="1"
            max="8"
          />
          <br />
          {/* vaidation */}
          {error && residents.length <= 0 ? (
            <label className="validRes">
              Resident feild should not be emply
            </label>
          ) : (
            ""
          )}
          <input
            className="border"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setName(e.target.value);
              handleChange(e);
            }}
            id="name"
            placeholder="Name"
          />
          <br />
          {/* vaidation */}
          {error && name.length <= 0 ? (
            <label className="validRes">Name feild should not be emply</label>
          ) : (
            ""
          )}
          {/* <input
            className="border"
            type="text"
            value={formData.gender}
            onChange={(e) => {
              setGender(e.target.value);
              handleChange(e);
            }}
            id="gender"
            placeholder="Gender"
            pattern="[Mm]ale|[Ff]emale"
          />
          <br /> */}
          {/* vaidation */}
          {/* {error && gender.length <= 0 ? (
            <label htmlFor="flat-Number" className="validRes">
              Gender feild must be male or female
            </label>
          ) : (
            ""
          )} */}
          {/*  sadasssssss*/}

          <select
            name="gender"
            className="border"
            type="text"
            value={formData.gender}
            onChange={(e) => {
              setGender(e.target.value);
              handleChange(e);
            }}
            id="gender"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/* vaidation */}
          {error && gender.length <= 0 ? (
            <label htmlFor="flat-Number" className="validRes">
              Gender feild must be male or female
            </label>
          ) : (
            ""
          )}

          <input
            className="border"
            type="number"
            value={formData.age}
            onChange={(e) => {
              setAge(e.target.value);
              handleChange(e);
            }}
            id="age"
            placeholder="Age"
            // age must be equal to || greater than 18
            min="18"
            max="100"
          />
          <br />
          {/* vaidation */}
          {error && age.length <= 0 ? (
            <label htmlFor="flat-Number" className="validRes">
              Age feild must be greater than 18 years
            </label>
          ) : (
            ""
          )}
          <br />
          <input className="btnSumit" type="submit" />
        </form>
      </div>
    </div>
  );
};
