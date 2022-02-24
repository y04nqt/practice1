interface IPracticeComponentProps {
  setTitleEnding: (update: string) => void;
}

export default function PracticeComponent({
  setTitleEnding
}: IPracticeComponentProps) {
  return (
    <div>
      <button
        data-testid="PracticeComponentBtn"
        onClick={() => setTitleEnding('Updated From Child')}
      >
        Lil Bucko Update
      </button>
    </div>
  );
}