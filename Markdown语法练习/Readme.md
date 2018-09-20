# **Markdown test**
## **SubHeader**
## **ThirdTitle**

>Hello World
>> Indent1
>>> Indent2

```代码
var num = 0;
for (var i = 0; i < 5; i++) {
    num+=i;
}
console.log(num);
```

>插入链接
>>内链式
>>>[百度](http://www.baidu.com "百度一下") 

```

块内容

```

>插入图片
![](./Image/apple.jpg "苹果")

>插入图片带链接
>>[![](./Image/apple.jpg)](http://www.baidu.com "百度")

>插入视频
>>markdown
>>>[![](./Image/apple.jpg)](http://v.youku.com/v_show/id_XMjgzNzM0NTYxNg==.html?spm=a2htv.20009910.contentHolderUnit2.A&from=y1.3-tv-grid-1007-9910.86804.1-2#paction)

>序表
>>1. One
>>2. Two
>>3. Three

>> * One
>> * Two
>> * Three

>序表嵌套
1. one
    1. one-1
    2. two-2
2. two 
    * two-1
    * two-2

>任务列表
>> - [x] Google
>> - [ ] Microsoft

>脚注
>书名:Markdown入门[1]
>[^1]: xx网站有售
