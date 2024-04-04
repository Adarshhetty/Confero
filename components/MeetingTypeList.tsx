"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();
  const createMeeting=()=>{
    
  }
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        bgColor="bg-orange-1"
        svgSrc="/icons/add-meeting.svg"
        svgAlt="Add Meeting"
        title="New Meeting"
        desc="Start an instant meeting"
        handleClick={() => {
          setMeetingState("isInstantMeeting");
        }}
      />
      <HomeCard
        bgColor="bg-blue-1"
        svgSrc="/icons/join-meeting.svg"
        svgAlt="Join Meeting"
        title="Join Meeting"
        desc="Via invitation link"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
      />
      <HomeCard
        bgColor="bg-purple-1"
        svgSrc="/icons/schedule.svg"
        svgAlt="Schedule Meeting"
        title="Schedule Meeting"
        desc="Plan your meeting"
        handleClick={() => {
          setMeetingState("isScheduleMeeting");
        }}
      />
      <HomeCard
        bgColor="bg-yellow-1"
        svgSrc="/icons/recordings.svg"
        svgAlt="Add Meeting"
        title="View Recordings"
        desc="Check out your recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
