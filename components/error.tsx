"use client";

const Error = () => {
  return (
    <div className="h-[100dvh] flex flex-col space-y-2 items-center justify-center text-white">
      <p>데이터 집계 중 문제가 발생하였어요.</p>
      <p>잠시 후 다시 시도해주세요!</p>
    </div>
  );
};

export default Error;
