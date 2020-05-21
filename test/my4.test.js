
import axios from 'axios';
import { getData } from '../api/require';
jest.mock('axios');

test('mock 使用jest来模拟axios请求', async () => {
    //axios不会发送真实的请求 而且返回这里定义的mock数据
    axios.get.mockResolvedValue({ data: 'hello' }) //第一次模拟的返回数据
    // expect.assertions(1);
    await getData().then((res) => {
        expect(res).toBe('hello');
        //  done();
    })
    axios.get.mockResolvedValue({ data: 'sorry' }) //第二次的模拟返回数据
    await getData().then((res) => {
        expect(res).toBe('sorry');
    })
})