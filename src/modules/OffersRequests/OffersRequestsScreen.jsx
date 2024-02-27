import { useState } from "react";
import DashboardTemplate from "../../Components/Templates/DashboardTemplate.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import TextInputField from "../../Components/basic/TextInputField.jsx";
import { FiMapPin } from "react-icons/fi";
import AppImages from "../../assets/images/index.js";


function OffersRequestsScreen() {
  const modalStyle = {
    content: {
      top: "50%",
      width : "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "100vh",
      overflowY: "auto",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0, 0.5)",
    },
  };
  const [formFields, setFormFields] = useState({
    title: "",
    message: "",
    location: "",
    state:"",
    package:"",
    duration:""

  });
  const requiredFields = [
    "state",
    "title",
    "message",
    "location",
    "package",
    "duration",
  ];
  const [isIconClicked, setIsIconClicked] = useState(false);
  const handleIconClick = () => {
    // handle icon click logic
    setIsIconClicked(!isIconClicked); 
    // Toggle isIconClicked state
    handleSecondDivClick()
  };
  // const [formErrors, setFormErrors] = useState({
  //   title: "",
  //   message: "",
  //   category: "",
  // });
const [isAddModalOpen, setIsAddModalOpen] = useState(false);
const [part, setPart] = useState(1);
   const [isInputFocused, setIsInputFocused] = useState(false);

   const handleInputFocus = () => {
     setIsInputFocused(true);
   };

   const handleInputBlur = () => {
     setIsInputFocused(false);
   };

    const handleSecondDivClick = () => {
      // Simulate getting the current location latitude and longitude.
      // Replace this with your actual code to get the location.
      const currentLocation = {
        latitude: 123.456,
        longitude: 789.012,
      };

      setFormFields((old) => ({
        ...old,
        location: `Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}`,
      }));
    };
  const handleSubmit = (e) => {
    e.preventDefault();
      const emptyFields = requiredFields.filter((field) => !formFields[field]);
       if (emptyFields.length > 0) {
         alert(
           `Please fill in the following fields: ${emptyFields.join(", ")}`
         );
         return;
       }
    console.log("data", formFields.title, formFields.message, formFields.state, formFields.location, selectedFiles);
  };
  const states = ['Ac service', 'phone' , 'rental car']
  const packages = ["listing", "add"];
  const durations = ["6 months", "1 year", "1.5 year"];
const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [images1, setImages1] = useState([]);
  const [selectedFiles1, setSelectedFiles1] = useState([]);

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    const selectedImages = Array.from(files).map((file) => URL.createObjectURL(file));

    setImages([...images, ...selectedImages]);
    setSelectedFiles([...selectedFiles, ...files]);
  };
   const handleImageRemove = (index) => {
     const updatedImages = [...images];
     const updatedFiles = [...selectedFiles];

     updatedImages.splice(index, 1);
     updatedFiles.splice(index, 1);

     setImages(updatedImages);
     setSelectedFiles(updatedFiles);
   };
  const handleFileInputChange1 = (e) => {
    const files = e.target.files;
    const selectedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages1([...images1, ...selectedImages]);
    setSelectedFiles1([...selectedFiles1, ...files]);
  };
   const handleImageRemove1 = (index) => {
     const updatedImages = [...images1];
     const updatedFiles = [...selectedFiles1];

     updatedImages.splice(index, 1);
     updatedFiles.splice(index, 1);

     setImages1(updatedImages);
     setSelectedFiles1(updatedFiles);
   };

 

  // const handleSubmit = () => {
  //   // Send selectedFiles to your server or perform further actions
  //   console.log(selectedFiles);
  // };
  return (
    <DashboardTemplate pageTitle={"Offers / Requests"}>
      <div className="bg-white min-h-[50vh] py-4 px-8 rounded-lg shadow-lg">
        <Tabs selectedTabClassName="border-b-2 border-blue-500 text-[#000]">
          <TabList className={"flex items-center gap-6 border-b-[1px]"}>
            <Tab
              className={
                "border-0 bg-transparent cursor-pointer outline-none py-2 px-2 text-slate-500"
              }
            >
              FEATURED
            </Tab>
            <Tab
              className={
                "border-0 bg-transparent cursor-pointer outline-none py-2 px-2 text-slate-500"
              }
            >
              REQUESTS
            </Tab>
            <Tab
              className={
                "border-0 bg-transparent cursor-pointer outline-none py-2 px-2 text-slate-500"
              }
            >
              OFFERS
            </Tab>
          </TabList>
          <TabPanel>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mt-3">
                <img src={AppImages.postImage} alt="" />
              </div>
              <div className="text-[#333333] text-[24px] text-center">
                Get more leads with featured posts
              </div>
              <div
                className="w-[142px] h-[40px] bg-[#24ACE3] pt-2 text-center rounded-md mt-5 text-white hover:bg-[#80c6e1] cursor-pointer"
                onClick={(e) => {
                  setIsAddModalOpen(true);
                }}
              >
                Create Now
              </div>
              <Modal
                isOpen={isAddModalOpen}
                // onAfterOpen={afterOpenModal}
                style={modalStyle}
                onRequestClose={() => setIsAddModalOpen(false)}
              >
                <form
                  // onSubmit={handleSubmit}
                  className="max-w-md mx-auto my-3 w-full h-[70vh] justify-between flex flex-col"
                >
                  {part === 1 ? (
                    <div>
                      <div className="text-[22px] text-[#24ACE3] text-center font-bold">
                        Featured Post
                      </div>
                      <div className="mt-[25px]">
                        <label
                          htmlFor={"site_location_states"}
                          className={`block  text-[14px] font-bold pl-0`}
                        >
                          Select Category /زمرہ
                        </label>
                        <select
                          id="site_location_states"
                          className={`px-3 py-2 my-1 text-[14px] border-[1px] border-solid border-black rounded-lg w-full outline-primary text-black `}
                          onChange={(e) => {
                            setFormFields((old) => ({
                              ...old,
                              state: e.target.value,
                            }));
                          }}
                          value={formFields.state ?? ""}
                          // disabled={action === "view"}
                        >
                          <option value="">Select</option>
                          {states.map((state, index) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        <TextInputField
                          type={"text"}
                          style={{
                            width: "w-full",
                            labelFontSize: "text-[14px]",
                            inputFontSize: "text-[12px]",
                          }}
                          label="Title / عنوان"
                          onChange={(e) => {
                            setFormFields((old) => ({
                              ...old,
                              title: e?.target?.value,
                            }));
                          }}
                          value={formFields.title}
                          error={formFields.title ? null : ""}
                          isRequired={true}
                          placeholder={"Title"}
                        />

                        <TextInputField
                          type={"text"}
                          style={{
                            width: "w-full",
                            labelFontSize: "text-[27px]",
                            inputFontSize: "text-[22px]",
                          }}
                          label="Message / پیغام"
                          onChange={(e) => {
                            setFormFields((old) => ({
                              ...old,
                              message: e?.target?.value,
                            }));
                          }}
                          value={formFields.message}
                          error={formFields.message ? null : ""}
                          isRequired={true}
                          placeholder={"Message"}
                        />
                      </div>
                      <label
                        htmlFor={"site_location_states"}
                        className={`block  text-[14px] mt-2 font-bold`}
                      >
                        Location
                      </label>
                      <div
                        className={`w-full flex flex-row ${
                          isInputFocused ? "border-bold" : ""
                        }`}
                      >
                        <input
                          type="text"
                          placeholder="location"
                          required={true}
                          onChange={(e) => {
                            setFormFields((old) => ({
                              ...old,
                              location: e.target.value,
                            }));
                          }}
                          value={formFields.location}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          className={`block pl-4 text-[14px] py-2 mb-2 w-[80%] border-[1px] border-black rounded-md`}
                        />{" "}
                        <FiMapPin
                          className={`w-6 h-6 mt-3 ml-2 cursor-pointer ${
                            isIconClicked ? "text-blue-500" : "text-black"
                          }`}
                          onClick={handleIconClick}
                        />
                      </div>

                      <label
                        htmlFor={"site_location_states"}
                        className={`block text-[14px] font-bold`}
                      >
                        Upload Images
                      </label>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileInputChange}
                      />
                      <div className="image-preview flex flex-row">
                        {images.map((image, index) => (
                          <div key={index} className="image-container">
                            <button
                              className="remove-button"
                              onClick={() => handleImageRemove(index)}
                            >
                              <AiOutlineClose />
                            </button>
                            <img
                              src={image}
                              alt={`Image ${index}`}
                              className="w-[90px] h-[80px] mr-[30px]"
                            />
                          </div>
                        ))}
                      </div>

                      {/* <Link to={`/verify/${formFields.mobile}`}> */}
                      <button
                        className="w-full h-[46px] mb-3 bg-[#1FA3DB] text-[14px] rounded-md text-white hover:bg-[#8cd2f0]  mt-4"
                        onClick={(e) => {
                          setPart(2);
                        }}
                      >
                        Next
                      </button>
                      {/* </Link> */}
                    </div>
                  ) : part == 2 ? (
                    <div>
                      <div className="text-[22px] text-[#24ACE3] text-center font-bold">
                        Featured Post
                      </div>
                      <label
                        htmlFor={"site_location_states"}
                        className={`block text-[14px] font-bold`}
                      >
                        Select Package
                      </label>
                      <select
                        id="site_location_states"
                        className={`px-3 py-2 my-1 text-[14px] border-[1px] border-solid border-black rounded-lg w-full outline-primary text-black `}
                        onChange={(e) => {
                          setFormFields((old) => ({
                            ...old,
                            package: e.target.value,
                          }));
                        }}
                        value={formFields.package ?? ""}
                        // disabled={action === "view"}
                      >
                        <option value="">Select</option>
                        {packages.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>

                      <label
                        htmlFor={"site_location_states"}
                        className={`block mt-2 text-[14px] font-bold`}
                      >
                        Duration
                      </label>
                      <select
                        id="site_location_states"
                        className={`px-3 py-2 mb-2 text-[14px] border-[1px] border-solid border-black rounded-lg w-full outline-primary text-black `}
                        onChange={(e) => {
                          setFormFields((old) => ({
                            ...old,
                            duration: e.target.value,
                          }));
                        }}
                        value={formFields.duration ?? ""}
                        // disabled={action === "view"}
                      >
                        <option value="">Select</option>
                        {durations.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>

                      {/* Second Image  */}
                      <label
                        htmlFor={"site_location_states"}
                        className={`block mt-2 text-[14px] font-bold`}
                      >
                        Upload Transfer Receipt
                      </label>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileInputChange1}
                        className="mb-2"
                      />
                      <div className="image-preview flex flex-row">
                        {images1.map((image, index) => (
                          <div key={index} className="image-container">
                            <button
                              className="remove-button"
                              onClick={() => handleImageRemove1(index)}
                            >
                              <AiOutlineClose />
                            </button>
                            <img
                              src={image}
                              alt={`Image ${index}`}
                              className="w-[90px] h-[80px] mr-[30px]"
                            />
                          </div>
                        ))}
                      </div>

                      <button
                        className="w-full h-[46px] mb-3 bg-[#1FA3DB] text-[14px] rounded-md text-white hover:bg-[#8cd2f0]  mt-4"
                        onClick={(e) => {
                          setPart(3);
                        }}
                      >
                        Next
                      </button>
                      <button
                        className="w-full h-[46px] mb-3 bg-[#1FA3DB] text-[14px] rounded-md text-white hover:bg-[#8cd2f0]  mt-4"
                        onClick={(e) => {
                          setPart(1);
                        }}
                      >
                        Back
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[22px] text-[#24ACE3] text-center font-bold">
                        Featured Post
                      </div>
                      <div className="border-[1px] border-[#333333] my-2"></div>
                      <div className="text-[16px] font-bold text-[#333333]">
                        {formFields.title}
                      </div>
                      <div className="text-[14px] text-[#333333]">
                        {formFields.location}
                      </div>
                      <div className="text-[14px] text-[#333333]">
                        {formFields.state}
                      </div>
                      <div className="border-[1px] border-[#333333] my-2"></div>
                      <div className="text-[16px] font-bold text-[#333333]">
                        Offer Selected
                      </div>
                      <div className="text-[14px] text-[#333333]">
                        {formFields.location}
                      </div>
                      <div className="text-[14px] text-[#333333]">
                        {formFields.state}
                      </div>
                      <div className="border-[1px] border-[#333333] my-2"></div>
                      <div className="image-preview flex flex-row">
                        {images.map((image, index) => (
                          <div key={index} className="image-container">
                            <img
                              src={image}
                              alt={`Image ${index}`}
                              className="w-[90px] h-[80px] mr-[30px]"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="border-[1px] border-[#333333] my-2"></div>
                      <div className="text-[14px] font-bold text-[#333333]">
                        Your post goes live upon publishing. Receipt
                        verification with in 24 hours
                      </div>
                      <button
                        className="w-full h-[46px] mb-3 bg-[#1FA3DB] text-[14px] rounded-md text-white hover:bg-[#8cd2f0]  mt-4"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        Publish
                      </button>
                      <button
                        className="w-full h-[46px] mb-3 bg-[#1FA3DB] text-[14px] rounded-md text-white hover:bg-[#8cd2f0]  mt-4"
                        onClick={(e) => {
                          setPart(2);
                        }}
                      >
                        Back
                      </button>
                    </div>
                  )}
                </form>
              </Modal>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-4">
              <h1>Hello World 2</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-4">
              <h1>Hello World 3</h1>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </DashboardTemplate>
  );
}

export default OffersRequestsScreen;