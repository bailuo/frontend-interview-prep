
#### 准备工作

1. 下载并安装vscode
2. 打开vscode并执行```command + shift + p```(在windows环境下快捷键为```ctrl + shift + p```), 搜索```code```，并执行 ```install 'code' command in PATH```
3. 找到相应的shell配置文件比如.zshrc 做必要的路径配置
4. 在命令行执行```git config --global core.editor "code --wait"```，如果希望每次打开一个新的window可以使用```git config --global core.editor "code --wait --new-window"```

#### 实际操作

1. 在Git上找到相应的Head Id, 比如 ```1dfccb2680300c2dd93b30096ea3855c9f349e24```, 具体查找方法，可以在本地执行```git log```或者在github/gitlab中这个repo的页面上找相应的commit

2. 在命令行使用 ```git rebase -i XXXXXXXXXXXXXX```， 如上文的例子这里就应该是 ```git rebase -i 1dfccb2680300c2dd93b30096ea3855c9f349e24```

3. 使用编辑器将自己需要留用的commit 选择pick，而不用的选择squash, 推荐使用vscode，使用前请确认vscode的命令行工具已经安装并且将git的默认编辑器切换至vscode

4. 编辑commit的message后关闭

5. 执行命令 ```git push --force-with-lease origin HEAD```
