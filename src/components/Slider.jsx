import { useEffect, useRef, useState } from "react";

export const Slider = ({ value, onChange }) => {
  const sliderRef = useRef(null);

  if (value > 100) value = 100;
  if (value < 0) value = 0;

  const [trackWidth, setTrackWidth] = useState(value);

  // update the track width when the value changes or the window is resized
  useEffect(() => {
    const updateTrackWidth = () => {
      setTrackWidth((sliderRef.current.offsetWidth / 100) * value);
    };

    updateTrackWidth();

    window.addEventListener("resize", updateTrackWidth);

    return () => {
      window.removeEventListener("resize", updateTrackWidth);
    };
  }, [value]);

  const handleMouseDownOnTrack = (e) => {
    const xCoordinate =
      e.clientX - sliderRef.current.getBoundingClientRect().left; // Calculate the horizontal distance between the click location and the slider's left edge
    setTrackWidth(xCoordinate);
    handleThumbDrag(e);
  };

  const initiateThumbDrag = (e) => {
    document.addEventListener("mousemove", handleThumbDrag);
    document.addEventListener("mouseup", terminateThumbDrag);
  };

  const terminateThumbDrag = () => {
    document.removeEventListener("mousemove", handleThumbDrag);
    document.removeEventListener("mouseup", terminateThumbDrag);
  };

  // Handle dragging the thumb
  const handleThumbDrag = (e) => {
    let newTrackWidth =
      e.clientX - sliderRef.current.getBoundingClientRect().left; // Distance between the click location and the slider's left edge

    // Adjust the maximum and minimum track width to prevent exceeding the slider's bounds
    let maxWidth = sliderRef.current.offsetWidth;
    if (newTrackWidth < 0) newTrackWidth = 0;
    if (newTrackWidth > maxWidth) newTrackWidth = maxWidth;

    setTrackWidth(() => newTrackWidth);
    initiateThumbDrag();
    if (onChange) {
      onChange((newTrackWidth / sliderRef.current.offsetWidth) * 100);
    }
  };
  return (
    <div
      ref={sliderRef}
      onMouseDown={handleMouseDownOnTrack}
      className="group relative flex  h-3 flex-col justify-center rounded-full"
    >
      <SliderTrack trackWidth={trackWidth} />
      <SliderThumb position={trackWidth} />
    </div>
  );
};

function SliderTrack({ trackWidth }) {
  return (
    <div className="group relative h-1 w-full rounded-full bg-[#ffffff4d]">
      <div
        style={{
          width: `${trackWidth}px`,
        }}
        className="flex h-1 items-center rounded-full bg-white group-hover:bg-spotify group-active:bg-spotify"
      ></div>
    </div>
  );
}

function SliderThumb({ position }) {
  return (
    <div
      style={{
        transform: `translateX(${position}px)`,
      }}
      className="absolute ml-[-6px] h-3 w-3 rounded-full bg-white shadow-inner active:opacity-100 group-hover:opacity-100 group-active:opacity-100 sm:opacity-0"
    ></div>
  );
}
