import AnswerCard from "./_components/answer-card";

const page = () => {
  return (
    <div className="container  rounded-[32px]">
      {[1, 2, 3].map((item) => (
        <div className="border-b border-[#E2E8F0] last:border-b-0" key={item}>
          <AnswerCard />
        </div>
      ))}
    </div>
  );
};

export default page;
