### 安装Docker

1. 下载docker， 正常安装, 我是直接下载了Mac下使用的dmg包。下载后拖拽进应用当中即可

### 安装Jenkins

1. 下载安装，命令行输入

```code
// 当前最新版本
docker pull jenkins/jenkins:lts
// OR 当周的最新版
docker pull jenkins/jenkins
```

2. 为了做Jenkins的持久化，我们需要创建相应的目录空间
比如在home目录下面

```code
mkdir jenkins_home
```
