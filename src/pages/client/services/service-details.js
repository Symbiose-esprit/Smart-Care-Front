import React ,{ useEffect }from 'react';
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";


const ServiceDetails = () => {
    useEffect(() => {
        const apiKey = "ecbcbaaa-7f04-4496-8c90-eec0ef663b62";
        const meetingId = "milkyway";
        const name = "Demo User";
    
        const config = {
          name: name,
          meetingId: meetingId,
          apiKey: apiKey,
    
          containerId: null,
          redirectOnLeave: "http://localhost:3000/",
    
          micEnabled: true,
          webcamEnabled: true,
          participantCanToggleSelfWebcam: true,
          participantCanToggleSelfMic: true,
    
          chatEnabled: true,
          screenShareEnabled: true,
          pollEnabled: true,
          whiteboardEnabled: true,
          raiseHandEnabled: true,
    
          recordingEnabled: true,
          recordingEnabledByDefault: false,
          recordingWebhookUrl: "https://www.videosdk.live/callback",
          recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
    
          brandingEnabled: true,
          brandName: "Smart Care",
    
          participantCanLeave: true, // if false, leave button won't be visible
    
          livestream: {
            autoStart: true,
            outputs: [
              // {
              //   url: "rtmp://x.rtmp.youtube.com/live2",
              //   streamKey: "<STREAM KEY FROM YOUTUBE>",
              // },
            ],
          },
    
          permissions: {
            askToJoin: false, // Ask joined participants for entry in meeting
            toggleParticipantMic: true, // Can toggle other participant's mic
            toggleParticipantWebcam: true, // Can toggle other participant's webcam
            removeParticipant: true, // Remove other participant from meeting
            endMeeting: true, // End meeting for all participant
            drawOnWhiteboard: true, // Can Draw on whiteboard
            toggleWhiteboard: true, // Can toggle whiteboard
            toggleRecording: true, // Can toggle recording
          },
    
          joinScreen: {
            visible: true, // Show the join screen ?
            title: "Doctor consultation Call", // Meeting title
            meetingUrl: window.location.href, // Meeting joining url
          },
    
          pin: {
            allowed: true, // participant can pin any participant in meeting
            layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
          },
    
          leftScreen: {
            // visible when redirect on leave not provieded
            actionButton: {
              // optional action button
              label: "Video SDK Live", // action button label
              href: "https://videosdk.live/", // action button href
            },
          },
        };
    
        const meeting = new VideoSDKMeeting();
        meeting.init(config);
      }, []);

      //return <div></div>;
      return (
        <>
        </>
    )
}

export default ServiceDetails;