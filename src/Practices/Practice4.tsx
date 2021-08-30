export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const tatal = num * 1.1;
    console.log(tatal);
  };
  const onClickPractice = () => {
    calcTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
