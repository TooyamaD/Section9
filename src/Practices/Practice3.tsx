export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const tatal = num * 1.1;
    return tatal;
  };
  const onClickPractice = () => {
    let tatal: number = 0;
    tatal = getTotalFee(1000);
    console.log(tatal);
  };
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
