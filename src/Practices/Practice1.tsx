export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const tatal = num * 1.1;
    console.log(tatal);
  };
  const onClickPractice = () => {
    calcTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
