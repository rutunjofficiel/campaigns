'use client'
import { Audio } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="overlay">
      <Audio
        visible={true}
        height={100}
        width={100}
        color="#029AFF"
        wrapperwrapperStyle={{ color: "blue" }}
      />
    </div>
  );
}
