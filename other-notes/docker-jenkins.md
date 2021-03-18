以下操作为Mac下操作

### 基础啊做法

1. 下载docker， 正常安装, 我是直接下载了Mac下使用的dmg包。下载后拖拽进应用当中即可
2. 打开命令行工具 docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts
3. 在控制台复制jenkins初始密码， 保留好
4. 打开localhost:8080 默认会打开Jenkins初始页面
5. 粘贴刚才复制的Jenkins密码，开始安装插件

### 手动操作

1. 下载Docker的Mac客户端，和基础玩法的第一步一样
2. 打开控制台，命令行输入

```code
// 当前最新版本
docker pull jenkins/jenkins:lts
// OR 当周的最新版
docker pull jenkins/jenkins
```

2. 创建Jenkins目录

参考： <https://github.com/jenkinsci/docker/blob/master/README.md>
