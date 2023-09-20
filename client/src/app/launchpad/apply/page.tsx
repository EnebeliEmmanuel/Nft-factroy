/**
 * Apply Component
 *
 * This React component represents an application form with multiple pages and navigation.
 * Users can navigate through different sections of the form, input data, and submit it.
 *
 * @component
 */

// Import necessary modules and components
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
import Succes from "@/components/Forms/Succes";

const Apply: React.FC = () => {
  // State variables
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [confirm, setConfirm] = useState<boolean>(false);

  /**
   * Function to navigate to the next page of the application form.
   * It increments the current page number.
   */
  const handleNextPage = () => {
    if (currentPage < 9) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  /**
   * Function to toggle the confirmation state.
   * It changes the confirmation state from true to false or vice versa.
   */
  const toggleConfirmation = () => {
    setConfirm(!confirm);
  };

  // Check if the current page is the last page of the form
  const isLastPage = currentPage === 8;

  /**
   * Function to render the current page of the application form based on the current page number.
   * It returns the appropriate form component for the current page.
   *
   * @returns {JSX.Element} - The JSX element representing the current page of the form.
   */
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
        return <Social />;
      case 9:
      default:
        return <Succes cancel={toggleConfirmation} />;
    }
  };

  return (
    <div className="flex flex-col justify-start h-screen mt-10 mb-10">
      <div className="w-[98%] ">{renderCurrentPage()}</div>
      {currentPage > 2 && currentPage < 9 && (
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
      {confirm && (
        <ConfirmSubmit nextPage={handleNextPage} cancel={toggleConfirmation} />
      )}
    </div>
  );
};

export default Apply;
