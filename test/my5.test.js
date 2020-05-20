import my5 from "../js/my5";

//快照测试
test("测试 generateConfig 函数", () => {
  expect(my5.generateConfig()).toMatchSnapshot({
    time: expect.any(Date)
  });
});

//行内快照，需要安装包
test("测试 generateConfig 函数", () => {
  expect(my5.generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date) //可以写别的类型
    },
    `
    Object {
      "nickName": "谢谢你",
      "nickName1": "忙着淋雨",
      "nickName2": "sorry",
      "time": Any<Date>,
    }
  `
  );
});
