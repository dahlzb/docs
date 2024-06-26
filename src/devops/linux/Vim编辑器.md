---
title: Vim编辑器
date: 2024-04-12 17:07:05
order: 2
---
## Vim编辑器

#### 使用 vim 命令进入 vim 界面

vim 后面加上你要打开的已存在的文件名或者不存在（则作为新建文件）的文件名。在环境里输入下面的命令：

```bash
vim practice_1.txt
```

直接使用 vim 也可以打开 vim 编辑器，但是不会打开任何文件。

```bash
vim
```

进入命令行模式后输入 `:e ` 同样可以打开相应文件。

#### 游标移动

在进入 vim 后，按下 `i` 键进入插入模式。在该模式下您可以输入文本信息,下面请输入如下三行信息：

```txt
12345678
abcdefghijk
shiyanlou.com
```

按`Esc`进入普通模式，在该模式下使用方向键或者 `h`，`j`，`k`，`l` 键可以移动游标。

| 按键 | 说明             |
| ---- | ---------------- |
| `h`  | 左               |
| `l`  | 右（小写 L）     |
| `j`  | 下               |
| `k`  | 上               |
| `w`  | 移动到下一个单词 |
| `b`  | 移动到上一个单词 |

#### 进入插入模式

在普通模式下使用下面的键将进入插入模式，并可以从相应的位置开始输入

| 命令 | 说明                                     |
| ---- | ---------------------------------------- |
| `i`  | 在当前光标处进行编辑                     |
| `I`  | 在行首插入                               |
| `A`  | 在行末插入                               |
| `a`  | 在光标后插入编辑                         |
| `o`  | 在当前行后插入一个新行                   |
| `O`  | 在当前行前插入一个新行                   |
| `cw` | 替换从光标所在位置后到一个单词结尾的字符 |

#### 命令行模式下保存文档

从普通模式输入 `:` 进入命令行模式，输入 `w` 回车，保存文档。输入 `:w ` 可以将文档另存为其他文件名或存到其它路径下。

#### 命令行模式下退出 vim

从普通模式输入 `:` 进入命令行模式，输入 `wq` 回车，保存并退出编辑。

以下为其它几种退出方式：

| 命令               | 说明             |
| ------------------ | ---------------- |
| `:q!`              | 强制退出，不保存 |
| `:q`               | 退出             |
| `:wq!`             | 强制保存并退出   |
| `:w <文件路径>`    | 另存为           |
| `:saveas 文件路径` | 另存为           |
| `:x`               | 保存并退出       |
| `:wq`              | 保存并退出       |

#### 普通模式下退出 vim

普通模式下按下 `Shift+zz` 即可保存退出 vim。

#### 普通模式下删除 vim 文本信息

进入普通模式，使用下列命令可以进行文本快速删除：

| 命令      | 说明                       |
| --------- | -------------------------- |
| `x`       | 删除游标所在的字符         |
| `X`       | 删除游标所在前一个字符     |
| `Delete`  | 同 `x`                     |
| `dd`      | 删除整行                   |
| `dw`      | 删除一个单词（不适用中文） |
| `d$`或`D` | 删除至行尾                 |
| `d^`      | 删除至行首                 |
| `dG`      | 删除到文档结尾处           |
| `d1G`     | 删至文档首部               |

除此之外，你还可以在命令之前加上数字，表示一次删除多行，如：

`2dd` 表示一次删除 2 行。

#### 执行指定次数相同的命令

进入普通模式输入 `N`，N 表示重复后面的次数，下面来练习：

打开文件文件进行编辑

```bash
vim protocols
```

下面你可以依次进行如下操作练习：

- 输入 `10x`，删除 10 个连续字符
- 输入 `3dd`，将会删除 3 行文本

在普通模式下，你还可以使用 `dw` 或者 `daw`(delete a word)删除一个单词，所以你可以很容易的联想到 `dnw`(**n 替换为相应数字**) 表示删除 n 个单词。

#### 游标的快速跳转

普通模式下，下列命令可以让光标快速调转到指定位置，我们分别讨论快速实现**行间**跳转和**行内**跳转。

#### 行间跳转

| 命令                    | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `nG`(n Shift+g) / `ngg` | 游标移动到第 n 行 **(如果默认没有显示行号，请先进入命令模式，输入 `:set nu` 以显示行号)** |
| `gg`                    | 游标移动到到第一行                                           |
| `G`(Shift+g)            | 到最后一行                                                   |

**小技巧：你在完成依次跳转后，可以使用 `Ctrl+o` 快速回到上一次(跳转前)光标所在位置**,这个技巧很实用，比如当你在写代码时，忽然想起有个 bug，需要修改，这时候你跳过去改好了，只需要按下 `Ctrl+o` 就可以回到你之前的位置。vim 中会用很多类似的小技巧就等着你去发掘。

#### 行内跳转

普通模式下使用下列命令在行内按照单词为单位进行跳转：

| 命令      | 说明                                                       |
| --------- | ---------------------------------------------------------- |
| `w`       | 到下一个单词的开头                                         |
| `e`       | 到当前单词的结尾                                           |
| `b`       | 到前一个单词的开头                                         |
| `ge`      | 到前一个单词的结尾                                         |
| `0`或`^`  | 到行头                                                     |
| `$`       | 到行尾                                                     |
| `f<字母>` | 向后搜索<字母>并跳转到第一个匹配的位置(非常实用)           |
| `F<字母>` | 向前搜索<字母>并跳转到第一个匹配的位置                     |
| `t<字母>` | 向后搜索<字母>并跳转到第一个匹配位置之前的一个字母(不常用) |
| `T<字母>` | 向前搜索<字母>并跳转到第一个匹配位置之后的一个字母(不常用) |

#### 复制及粘贴文本

- 普通模式中使用 `y` 复制
- 普通模式中，`yy` 复制游标所在的整行（`3yy` 表示复制 3 行）
- 普通模式中，`y^` 复制至行首，或 `y0`。不含光标所在处字符。
- 普通模式中，`y$` 复制至行尾。含光标所在处字符。
- 普通模式中，`yw` 复制一个单词。
- 普通模式中，`y2w` 复制两个单词。
- 普通模式中，`yG` 复制至文本末。
- 普通模式中，`y1G` 复制至文本开头。
- 普通模式中使用 `p` 粘贴
- 普通模式中，`p`(小写)代表粘贴至光标后（下）
- 普通模式中，`P`(大写)代表粘贴至光标前（上）

打开文件进入普通模式练习上述命令，这会儿你就可以随意 `yy` 了。

```bash
vim protocols
```

#### 剪切及粘贴

其实前面讲得 `dd` 删除命令就是剪切，你每次 `dd` 删除文档内容后，便可以使用 `p` 来粘贴，也这一点可以让我们实现一个很爽快的功能——交换上下行。

`ddp`，就这么简单，即实现了快速交换光标所在行与它下面的行。

#### 替换和撤销(Undo)命令

替换和 Undo 命令都是针对普通模式下的操作：

| 命令             | 说明                                         |
| ---------------- | -------------------------------------------- |
| `r`+<待替换字母> | 将游标所在字母替换为指定字母                 |
| `R`              | 连续替换，直到按下 `Esc`                     |
| `cc`             | 替换整行，即删除游标所在行，并进入插入模式   |
| `cw`             | 替换一个单词，即删除一个单词，并进入插入模式 |
| `C`(大写)        | 替换游标以后至行末                           |
| `~`              | 反转游标所在字母大小写                       |
| `{n}u`           | 撤销一次或 n 次操作                          |
| `U`(大写)        | 撤销当前行的所有修改                         |
| `Ctrl+r`         | redo，即撤销 undo 的操作                     |

#### 快速缩进

`shiftwidth` 命令是指上一节 `>>` 命令产生的缩进（可以简写成`sw`），普通模式下输入 `:` 进入命令行模式下对 `shiftwidth` 值进行设置可以控制缩进和回退的字符数。 

| 命令                   | 说明                                       |
| ---------------------- | ------------------------------------------ |
| ``>>``                 | 整行将向右缩进（使用，用于格式化代码超爽） |
| ``<<``                 | 整行向左回退                               |
| ``:set shiftwidth?``   | 获取设定的缩进回退字符数                   |
| ``:set shiftwidth=10`` | 设置缩进为 10 个字符                       |

#### 调整文本位置

| 命令    | 说明           |
| ------- | -------------- |
| ``:ce`` | 使本行内容居中 |
| ``:ri`` | 使本行文本靠右 |
| ``:le`` | 使本行内容靠左 |

#### 快速查找

| 命令            | 说明           |
| --------------- | -------------- |
| ``/查找的字符`` | 向下查找       |
| ``?查找的字符`` | 向上查找       |
| ``n``           | 查找下一个内容 |
| ``N``           | 查找上一个内容 |
| ``:noh``        | 取消搜索       |
| ``:set hls``    | 设置搜索高亮   |

#### 高级查找

| 命令    | 说明                                               |
| ------- | -------------------------------------------------- |
| ``\*``  | 寻找游标所在处的单词，向下查找                     |
| ``\#``  | 寻找游标所在处的单词，向上查找                     |
| ``g\*`` | 寻找游标所在处的单词，向下查找，部分符合该单词即可 |
| ``g\#`` | 寻找游标所在处的单词，向上查找，部分符合该单词即可 |

#### 多文件编辑

同时打开多个文件

``` bash
vim 1.txt 2.txt
```

进入Vim后打开新文件

``` bash
:e 3.txt
```

| 命令                  | 说明                                             |
| --------------------- | ------------------------------------------------ |
| ``:n``                | 切换到下一个文件                                 |
| ``:n!``               | 强制切换到下一个文件，不会保存文件内容输入的内容 |
| ``:N``                | 切换到上一个文件                                 |
| ``:N!``               | 强制切换到下一个文件，不会保存文件内容输入的内容 |
| ``:e 3.txt``          | 打开新文件3.txt                                  |
| ``:e#``               | 回到前一个文件                                   |
| ``:ls``               | 列出以前编辑过的文档                             |
| ``:b [文件名|编号]``  | 直接进入文件2.txt编辑                            |
| ``:bd [文件名|编号]`` | 删除以前编辑过的列表中的文件项目                 |
| ``:e! 4.txt``         | 新打开文件4.txt，放弃正在编辑的文件              |
| ``:f``                | 显示正在编辑的文件名                             |
| ``:f new.txt``        | 改变正在编辑的文件名字为 new.txt                 |

#### 恢复文件

> 由于在线环境无法复现此场景，请在本地尝试。

如果因为断电，终端意外关闭等原因造成文档没有保存，可以采用恢复方式。

vim 在编辑的时候会自动在当前文件目录下生成一个交换文件，一般以 `.swp` 的格式保存，如果有多个版本的交换文件，还可能是 `.swn`，`.swm` 等字母。注意这个交换文件的更新不是实时的，因为实时的更新会占用磁盘，影响系统其他正常进程的速度。

当 vim 意外终止且没有保存已编辑的内容时，可以使用交换文件对文件进行恢复，注意需要在编辑这个文件的地方进行编辑，因为交换文件默认在编辑的目录生成。

例如假设 `1.txt` 意外关闭，我们可以输入 `vim` 然后输入 `:recover 1.txt`。

```bash
vim
:recover 1.txt

# 出现如下提示按下回车即可恢复，如果有多个版本需要输入对应的交换文件前的数字选择要恢复的版本。
Using swap file ".1.txt.swp"
Original file "~/test/1.txt"
Recovery completed. You should check if everything is OK.
(You might want to write out this file under another name
and run diff with the original file to check for changes)
You may want to delete the .swp file now.
```

或者输入 `vim -r` 后直接选择用于恢复的文档的交换文件即可：

```bash
vim -r 1.txt
```

#### 可视模式

| 命令        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| ``v``       | 进入字符选择模式，移动光标走过的地方就会选取，再次按下 ``v`` 取消选取 |
| ``Shift+v`` | 进入行选择模式，上下移动光标选择行，再次按下取消选取         |
| ``Ctrl+v``  | 区域选择模式，可以进行矩形区域选择，再次按下取消选取         |

#### 视窗操作

vim 可以在一个界面里打开多个窗口进行编辑，这些编辑窗口称为 vim 的视窗。 

| 命令           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| ``:new``       | 打开一个新的Vim视窗，并进入视窗编辑一个新文件                |
| ``Ctrl+w``     | 打开一个新的Vim视窗，并进入视窗编辑一个新文件                |
| ``:sp 1.txt``  | 打开一个新的Vim视窗，并进入视窗编辑一个新文件                |
| ``:vsp 2.txt`` | 打开一个新的Vim视窗，并进入视窗编辑一个新文件                |
| ``Ctrl+w s``   | 将当前窗口分割成两个水平的窗口                               |
| ``Ctrl+w v``   | 将当前窗口分割成两个垂直的窗口                               |
| ``Ctrl+w q``   | 即 :q结束分割出来的视窗，如果在新视窗中有输入需要使用强制符！即:q! |
| ``Ctrl+w o``   | 打开一个视窗并且隐藏之前的所有视窗                           |
| ``Ctrl+w j``   | 移至下面视窗                                                 |
| ``Ctrl+w k``   | 移至上面视窗                                                 |
| ``Ctrl+w h``   | 移至左边视窗                                                 |
| ``Ctrl+w l``   | 移至右边视窗                                                 |
| ``Ctrl+w J``   | 将当前视窗移至下面                                           |
| ``Ctrl+w K``   | 将当前视窗移至上面                                           |
| ``Ctrl+w H``   | 将当前视窗移至左边                                           |
| ``Ctrl+w L``   | 将当前视窗移至右边                                           |
| ``Ctrl+w -``   | 减小视窗的高度                                               |
| ``Ctrl+w +``   | 增加视窗的高度                                               |

#### 创建加密文档

```bash
vim -x file1
```

输入您的密码，确认密码，这样在下一次打开时，vim 就会要求你输入密码。

#### 在 vim 执行外部命令 

在命令行模式中输入 `!` 可以执行外部的 bash 命令。

| 命令            | 说明                                              |
| --------------- | ------------------------------------------------- |
| `:!ls`          | 用于显示当前目录的内容                            |
| `:!rm FILENAME` | 用于删除名为 FILENAME 的文件                      |
| `:w FILENAME`   | 可将当前 VIM 中正在编辑的文件另存为 FILENAME 文件 |

#### 帮助系统

- 普通模式下按 `F1` 打开 `vim` 自己预设的帮助文档
- 命令行模式下输入 `:h shiftwidth` 打开名为 `shiftwidth` 的帮助文件
- 命令行模式下输入 `:ver` 显示版本及参数

#### 功能设定

可以在编辑文件的时候进行功能设定，如命令行模式下输入 `:set nu`（显示行数），设定值退出 vim 后不会保存。要永久保存配置需要修改 vim 配置文件。

vim 的配置文件 `~/.vimrc`（实验楼环境中配置文件在 `/etc/vim/vimrc`），可以打开文件进行修改，不过务必小心不要影响 vim 正常使用。

| 命令                   | 说明                            |
| ---------------------- | ------------------------------- |
| `:set` 或 `:se`        | 显示所有修改过的配置            |
| `:set all`             | 显示所有的设定值                |
| `:set <option>?`       | 显示 option 的设定值            |
| `:set nooption`        | 取消当前设定值                  |
| `:set autoindent(ai)`  | 设置自动缩进                    |
| `:set autowrite(aw)`   | 设置自动存档，默认未打开        |
| `:set background=dark` | 设置背景风格，`dark` 或 `light` |
| `:set backup(bk)`      | 设置自动备份，默认未打开        |
| `:set cindent(cin)`    | 设置 C 语言风格缩进             |

 更多详细参数请参考 [VIM 在线手册](http://vimdoc.sourceforge.net/htmldoc/usr_toc.html)。 