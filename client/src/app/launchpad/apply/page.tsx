// Import statements
"use client";
import React, { useState } from "react";
import Button from "@/common/Button";
import {
  SectionOneForm,
  SecondSectionForm,
} from "@/components/Forms/ProjectDetails";
import Onborading from "@/components/Forms/Onborading";
import GetStarted from "@/components/Forms/GetStarted";
import TeamInformationForm from "@/components/Forms/TeamInformation";
import ArtworkDetailsForm from "@/components/Forms/ArtworkDetails";
import Minting from "@/components/Forms/Minting";
import Social from "@/components/Forms/Social";
import ConfirmSubmit from "@/components/Forms/ConfirmSubmit";

// Apply Component
const Apply: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [confirm, setConfirm] = useState<boolean>(false);

  // Function to navigate to the next page
  const handleNextPage = () => {
    if (currentPage < 8) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Function to toggle confirmation
  const toggleConfirmation = () => {
    setConfirm(!confirm);
  };

  // Check if it's the last page
  const isLastPage = currentPage === 8;

  // Function to render the current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Onborading nextPage={handleNextPage} />;
      case 2:
        return <GetStarted nextPage={handleNextPage} />;
      case 3:
        return <SectionOneForm />;
      case 4:
        return <SecondSectionForm />;
      case 5:
        return <TeamInformationForm />;
      case 6:
        return <ArtworkDetailsForm />;
      case 7:
        return <Minting />;
      case 8:
      default:
        return <Social />;
    }
  };

  return (
    <div className="flex flex-col justify-start h-screen mt-10 mb-10">
      <div className="w-[98%] ">{renderCurrentPage()}</div>
      {currentPage > 2 && (
        <div className="w-[98%] flex justify-end mt-5">
          {isLastPage ? (
            <Button
              handleClick={toggleConfirmation}
              className="bg-gradient-linear px-6 mb-5 py-3"
            >
              <p>Submit</p>
            </Button>
          ) : (
            <Button
              handleClick={handleNextPage}
              className="bg-gradient-linear px-6 mb-5 py-3"
            >
              <p> Proceed</p>
            </Button>
          )}
        </div>
      )}
      {confirm && <ConfirmSubmit />}
    </div>
  );
};

export default Apply;
