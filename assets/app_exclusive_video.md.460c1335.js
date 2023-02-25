import{_ as s,c as a,o as e,a as l}from"./app.9b08bf72.js";const n="/assets/kdenlive.31294505.png",p="/assets/shotcut.e3133096.png",i="/assets/mkvtoolnix-1.7584ecb9.png",o="/assets/mkvtoolnix-2.c1732905.png",t="/assets/obs-studio.3123617d.png",r="/assets/bilibili-live-chat-1.3d9d14ab.png",c="/assets/bilibili-live-chat-2.c21df586.png",d="/assets/bilibili-live-chat-3.43b1717d.png",u="/assets/bilibili-live-chat-4.ed46aa88.png",h="/assets/bilibili-live-chat-5.3d6e87eb.png",b="/assets/bilibili-live-chat-6.d64c562c.png",m="/assets/bilibili-live-chat-7.f19b104b.png",C="/assets/danmaku-1.da4aa0e8.png",y="/assets/danmaku-2.f6dc688c.png",v="/assets/screenkey.34d14102.png",S=JSON.parse('{"title":"视频制作","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"🎬 制作软件","slug":"🎬-制作软件","link":"#🎬-制作软件","children":[{"level":3,"title":"Kdenlive","slug":"kdenlive","link":"#kdenlive","children":[]},{"level":3,"title":"Shotcut","slug":"shotcut","link":"#shotcut","children":[]},{"level":3,"title":"MKVToolNix","slug":"mkvtoolnix","link":"#mkvtoolnix","children":[]},{"level":3,"title":"DaVinci Resolve","slug":"davinci-resolve","link":"#davinci-resolve","children":[]}]},{"level":2,"title":"📡 录屏直播","slug":"📡-录屏直播","link":"#📡-录屏直播","children":[{"level":3,"title":"OBS Studio","slug":"obs-studio","link":"#obs-studio","children":[]},{"level":3,"title":"Bilibili Live Chat（推荐）","slug":"bilibili-live-chat-推荐","link":"#bilibili-live-chat-推荐","children":[]},{"level":3,"title":"弹幕库（推荐）","slug":"弹幕库-推荐","link":"#弹幕库-推荐","children":[]},{"level":3,"title":"screenkey","slug":"screenkey","link":"#screenkey","children":[]}]},{"level":2,"title":"🔤 字幕制作","slug":"🔤-字幕制作","link":"#🔤-字幕制作","children":[{"level":3,"title":"ffmpeg","slug":"ffmpeg","link":"#ffmpeg","children":[]}]}],"relativePath":"app/exclusive/video.md","lastUpdated":1677183719000}'),g={name:"app/exclusive/video.md"},k=l(`<h1 id="视频制作" tabindex="-1">视频制作 <a class="header-anchor" href="#视频制作" aria-hidden="true">#</a></h1><blockquote><h3 id="💃🏻-商女不知亡国恨-隔江犹唱后庭花" tabindex="-1">💃🏻 商女不知亡国恨，隔江犹唱后庭花 <a class="header-anchor" href="#💃🏻-商女不知亡国恨-隔江犹唱后庭花" aria-hidden="true">#</a></h3><p>本小节讨论如何在 archlinux 上制作视频以及直播推流。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🎬-制作软件">🎬 制作软件</a><ul><li><a href="#kdenlive">Kdenlive</a></li><li><a href="#shotcut">Shotcut</a></li><li><a href="#mkvtoolnix">MKVToolNix</a></li><li><a href="#davinci-resolve">DaVinci Resolve</a></li></ul></li><li><a href="#📡-录屏直播">📡 录屏直播</a><ul><li><a href="#obs-studio">OBS Studio</a></li><li><a href="#bilibili-live-chat-推荐">Bilibili Live Chat（推荐）</a></li><li><a href="#弹幕库-推荐">弹幕库（推荐）</a></li><li><a href="#screenkey">screenkey</a></li></ul></li><li><a href="#🔤-字幕制作">🔤 字幕制作</a><ul><li><a href="#ffmpeg">ffmpeg</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🎬-制作软件" tabindex="-1">🎬 制作软件 <a class="header-anchor" href="#🎬-制作软件" aria-hidden="true">#</a></h2><h3 id="kdenlive" tabindex="-1">Kdenlive <a class="header-anchor" href="#kdenlive" aria-hidden="true">#</a></h3><p><a href="https://kdenlive.org/zh/" target="_blank" rel="noreferrer">Kdenlive</a> 是由 KDE 开发的自由开源的免费视频编辑软件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kdenlive/" target="_blank" rel="noreferrer">Kdenlive</a><sup>extra / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-jl_jB" id="tab-8JxfvCX" checked="checked"><label for="tab-8JxfvCX">sh</label><input type="radio" name="group-jl_jB" id="tab-iIdUEp8"><label for="tab-iIdUEp8">sh</label></div><div class="blocks"><p>::: code-group-item extra</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kdenlive</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kdenlive-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+n+`" alt="kdenlive"></p><h3 id="shotcut" tabindex="-1">Shotcut <a class="header-anchor" href="#shotcut" aria-hidden="true">#</a></h3><p><a href="https://www.shotcut.org/" target="_blank" rel="noreferrer">Shotcut</a> 是一个免费开源的跨平台视频编辑软件。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/shotcut/" target="_blank" rel="noreferrer">Shotcut</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-ZxdDB" id="tab-rXkSKRc" checked="checked"><label for="tab-rXkSKRc">sh</label><input type="radio" name="group-ZxdDB" id="tab-eSY1qGt"><label for="tab-eSY1qGt">sh</label></div><div class="blocks"><p>::: code-group-item community</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shotcut</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shotcut-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+p+`" alt="shotcut"></p><h3 id="mkvtoolnix" tabindex="-1">MKVToolNix <a class="header-anchor" href="#mkvtoolnix" aria-hidden="true">#</a></h3><p><a href="https://mkvtoolnix.download/index.html" target="_blank" rel="noreferrer">MKVToolNix</a> 是一套功能强大的 *.mkv 格式制作和处理的工具。支持将多种视频、音频、字幕等格式封装成 *.mkv 格式。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/mkvtoolnix-gui/" target="_blank" rel="noreferrer">MKVToolNix</a><sup>extra / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-QDyEE" id="tab-ruI4NRS" checked="checked"><label for="tab-ruI4NRS">sh</label><input type="radio" name="group-QDyEE" id="tab-R_Fljcp"><label for="tab-R_Fljcp">sh</label></div><div class="blocks"><p>::: code-group-item extra</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkvtoolnix-gui</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkvtoolnix-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+i+'" alt="mkvtoolnix-1"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>可在菜单栏 <code>MKVToolNix GUI</code> &gt; <code>Preferences</code> &gt; 侧边栏 <code>GUI</code> &gt; <code>Interface language</code> 中将语言更改为 <code>简体中文</code>：</p><p><img src="'+o+`" alt="mkvtoolnix-2"></p></div><h3 id="davinci-resolve" tabindex="-1">DaVinci Resolve <a class="header-anchor" href="#davinci-resolve" aria-hidden="true">#</a></h3><p><a href="http://www.blackmagicdesign.com/cn/products/davinciresolve/" target="_blank" rel="noreferrer">DaVinci Resolve</a> 是一款将剪辑、调色、视觉特效、动态图形和音频后期制作融于一身的视频编辑软件。</p><p>安装 <a href="https://aur.archlinux.org/packages/davinci-resolve/" target="_blank" rel="noreferrer">DaVinci Resolve（免费版）</a><sup>EULA / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-KQsXh" id="tab-_uOVGGf" checked="checked"><label for="tab-_uOVGGf">sh</label><input type="radio" name="group-KQsXh" id="tab-PUDbwpi"><label for="tab-PUDbwpi">sh</label></div><div class="blocks"><p>::: code-group-item aur</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">davinci-resolve</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (beta)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">davinci-resolve-beta</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>DaVinci Resolve（免费版）在 Linux 下支持的编解码格式有限，详情请参阅此 <a href="https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_15_Supported_Codec_List.pdf" target="_blank" rel="noreferrer">📄 文档</a>。</p><p>DaVinci Resolve 没有编入 fcitx 模块，所以在 Linux 下不能输入中文，可以使用剪贴板解决。</p></div><p>另外还有 <a href="https://aur.archlinux.org/packages/davinci-resolve-studio/" target="_blank" rel="noreferrer">DaVinci Resolve Studio（付费版）</a><sup>EULA / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-vvbEm" id="tab-1J_Cv5O" checked="checked"><label for="tab-1J_Cv5O">sh</label><input type="radio" name="group-vvbEm" id="tab-Db1siy3"><label for="tab-Db1siy3">sh</label></div><div class="blocks"><p>::: code-group-item aur</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">davinci-resolve-studio</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (beta)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">davinci-resolve-studio-beta</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><h2 id="📡-录屏直播" tabindex="-1">📡 录屏直播 <a class="header-anchor" href="#📡-录屏直播" aria-hidden="true">#</a></h2><h3 id="obs-studio" tabindex="-1">OBS Studio <a class="header-anchor" href="#obs-studio" aria-hidden="true">#</a></h3><p><a href="https://obsproject.com/zh-cn" target="_blank" rel="noreferrer">OBS Studio</a> 是免费开源的用于视频录制以及直播串流的软件。Linux 下操作与 Windows 下基本一致。</p><p>安装 <a href="https://www.archlinux.org/packages/community/x86_64/obs-studio/" target="_blank" rel="noreferrer">OBS Studio</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-iGo1z" id="tab-D4YiLPc" checked="checked"><label for="tab-D4YiLPc">sh</label><input type="radio" name="group-iGo1z" id="tab-ThEKYzx"><label for="tab-ThEKYzx">sh</label><input type="radio" name="group-iGo1z" id="tab-qFi-J6F"><label for="tab-qFi-J6F">sh</label></div><div class="blocks"><p>::: code-group-item aur (browser)</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">obs-studio-browser</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 有浏览器插件集成的 OBS Studio。编译要很久（大约 15 min）</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item community</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">obs-studio</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">obs-studio-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+t+`" alt="obs-studio"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>如果你使用较新的 NVIDIA 显卡，可以使用 NVENC 编码器。这将大大降低直播或录制过程中 CPU 的压力。</p><p>详情请参阅 <a href="https://www.nvidia.cn/geforce/guides/broadcasting-guide/" target="_blank" rel="noreferrer">NVIDIA NVENC OBS 指南</a>。</p><p>如果想进一步优化直播或录制性能，可以安装<a href="https://github.com/keylase/nvidia-patch" target="_blank" rel="noreferrer">此仓库</a>中的 NvFBC 显卡驱动补丁，再安装<a href="https://aur.archlinux.org/packages/obs-nvfbc-git/" target="_blank" rel="noreferrer">OBS NvFBC 插件</a><sup>aur</sup>，然后使用 NvFBC 来源即可。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">obs-nvfbc-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="bilibili-live-chat-推荐" tabindex="-1">Bilibili Live Chat（推荐） <a class="header-anchor" href="#bilibili-live-chat-推荐" aria-hidden="true">#</a></h3><p><a href="https://github.com/Tsuk1ko/bilibili-live-chat" target="_blank" rel="noreferrer">Bilibili Live Chat</a> 是一个无后端的、仿 YouTube Live Chat 的、箱都不用开就能食用的 Bilibili 直播弹幕姬。主要用于 OBS，为的是在低功能需求的情况下，不依靠任何第三方本地软件实现弹幕和礼物的展示。</p><p>可以直接使用部署在 Github Pages 的成品，也可以在本地运行一个服务器：</p><ol><li><p>克隆 <a href="https://github.com/Tsuk1ko/bilibili-live-chat" target="_blank" rel="noreferrer">Bilibili Live Chat repo</a> 到合适位置：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/Tsuk1ko/bilibili-live-chat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/some/folder</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+r+`" alt="bilibili-live-chat-1"></p></li><li><p>安装 <a href="https://archlinux.org/packages/community/x86_64/nodejs/" target="_blank" rel="noreferrer">Node.js</a> 和 <a href="https://archlinux.org/packages/community/any/yarn/" target="_blank" rel="noreferrer">Yarn</a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nodejs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>进入克隆仓库并安装项目的所有依赖项：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bilibili-live-chat</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+c+`" alt="bilibili-live-chat-2"></p></li><li><p>运行本地服务器：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+d+'" alt="bilibili-live-chat-3"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>也可以使用 <code>yarn build</code> 进行编译。这将在 <code>dist/</code> 目录产生一个可用于生产环境的包，再将其部署在服务器上。</p><p>更多信息可参阅 <a href="https://cli.vuejs.org/zh/guide/cli-service.html#cli-%E6%9C%8D%E5%8A%A1" target="_blank" rel="noreferrer">Vue CLI 官方文档</a>。</p></div></li><li><p>打开对应本地链接并设置 &gt; 点击 <code>Go!</code>：</p><p><img src="'+u+'" alt="bilibili-live-chat-4"></p><p><img src="'+h+'" alt="bilibili-live-chat-5"></p></li><li><p>打开 <a href="./video.html#obs-studio"><code>OBS Studio</code></a> &gt; 在 <code>来源</code> 中添加 <code>🌏 浏览器</code>（BrowserSource）&gt; 复制上方链接填写在 <code>URL</code>中。<code>宽度</code> 和 <code>高度</code> 可根据需要自行设置（不要在预览视图中拖拽缩放浏览器源的宽高），其它选项默认即可：</p><p><img src="'+b+'" alt="bilibili-live-chat-6"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>Bilibili Live Chat 需要使用 <a href="https://aur.archlinux.org/packages/obs-studio-browser" target="_blank" rel="noreferrer">有浏览器插件集成的 OBS Studio</a>。</p></div></li><li><p>在预览视图中将其移动至合适位置即可：</p><p><img src="'+m+`" alt="bilibili-live-chat-7"></p></li></ol><h3 id="弹幕库-推荐" tabindex="-1">弹幕库（推荐） <a class="header-anchor" href="#弹幕库-推荐" aria-hidden="true">#</a></h3><p><a href="https://www.danmaku.live/" target="_blank" rel="noreferrer">弹幕库</a> 是一个哔哩哔哩直播助手。目前已经 <a href="https://t.bilibili.com/378501835576827480" target="_blank" rel="noreferrer">停止更新</a>。</p><ol><li><p>安装 <a href="https://www.danmaku.live/" target="_blank" rel="noreferrer">弹幕库</a><sup>cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-AMo-q" id="tab-5yu-_QR" checked="checked"><label for="tab-5yu-_QR">sh</label><input type="radio" name="group-AMo-q" id="tab-H-rMKi-"><label for="tab-H-rMKi-">sh</label><input type="radio" name="group-AMo-q" id="tab-XtBeCVH"><label for="tab-XtBeCVH">sh</label></div><div class="blocks"><p>::: code-group-item cn</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bilibili-live-helper-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/bilibili-live-helper-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bilibili-live-helper-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+C+'" alt="danmaku-1"></p></li><li><p>点击 <code>应用模块</code> 或 <code>OBS 模块</code> 所需功能即可开启 / 设置对应功能，按照提示操作即可：</p><p><img src="'+y+`" alt="danmaku-2"></p></li></ol><h3 id="screenkey" tabindex="-1">screenkey <a class="header-anchor" href="#screenkey" aria-hidden="true">#</a></h3><p><a href="https://www.thregr.org/~wavexx/software/screenkey/" target="_blank" rel="noreferrer">screenkey</a> 是一个用于显示键盘键入在屏幕上的工具，可用于录屏演示。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/community/any/screenkey/" target="_blank" rel="noreferrer">screenkey</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-O-VAx" id="tab-HmKhOHV" checked="checked"><label for="tab-HmKhOHV">sh</label><input type="radio" name="group-O-VAx" id="tab-9c0s2_3"><label for="tab-9c0s2_3">sh</label></div><div class="blocks"><p>::: code-group-item community</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">screenkey</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">screenkey-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div></li><li><p>在终端输入 <code>screenkey</code> 以启动：</p><p><img src="`+v+`" alt="screenkey"></p></li><li><p>按下 <code>Ctrl</code> + <code>C</code> 即可退出</p></li></ol><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>可以通过以下设置在录屏演示中突出显示鼠标位置与点击效果：</p><p>打开 <code>系统设置</code> &gt; 点击侧边栏 <code>工作区行为</code> &gt; <code>桌面特效</code> &gt; 在 <code>无障碍功能</code> 中勾选 <code>鼠标定位</code> 与 <code>鼠标点击动效</code> &gt; <code>应用</code>。</p></div><h2 id="🔤-字幕制作" tabindex="-1">🔤 字幕制作 <a class="header-anchor" href="#🔤-字幕制作" aria-hidden="true">#</a></h2><p>视频字幕除了可以用上述视频编辑软件制作，还可以使用 <a href="https://ffmpeg.org/" target="_blank" rel="noreferrer">ffmpeg</a>（已经作为依赖安装）在命令行进行烧录。</p><h3 id="ffmpeg" tabindex="-1">ffmpeg <a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a></h3><p>一般情况来讲，一个视频加上外带的 *.srt 字幕是较为普遍的情况。这里描述如何为 YouTube 视频加入字幕。</p><ol><li><p>首先要进行视频字幕的下载。这里可以使用一个 Chromium 浏览器拓展 —— <a href="https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm" target="_blank" rel="noreferrer">YouTube™ 双字幕</a></p></li><li><p>接下来进行字幕与视频的重新烧录。<a href="./video.html#mkvtoolnix">MKVToolNix</a> 只能做那种分离的字幕，但是某些视频网站要上传烧录好的。为了更好的兼容性，建议始终将视频和文件重新烧录。使用 <code>ffmpeg</code> 进行操作：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ffmpeg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input.mp4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">subtitles=input.srt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output.mp4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>如果需要制作双语字幕（同时显示，而不是分字幕轨道），可以使用两次 <code>ffmpeg</code> 命令 —— 第一次添加主字幕，第二次添加副字幕。</p><ol><li>第一次添加主字幕。使用 MarginV 进行垂直方向的区分：</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ffmpeg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input.mp4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-strict</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">subtitles=input_zh.srt:force_style=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Fontsize=20\\,Fontname=FZYBKSJW--GB1-0\\,MarginV=30\\,Bold=-1\\,BorderStyle=1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-qscale:v</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output_with_zh.mp4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>第二次添加副字幕：</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ffmpeg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output_with_zh.mp4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-strict</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">subtitles=input_en.srt:force_style</span></span>
<span class="line"><span style="color:#FFCB6B;">=&#39;Fontsize=15\\,Fontname=FZYBKSJW--GB1-0\\,Bold=-1\\,BorderStyle=1&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-qscale:v</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output_with_double_subtitles.mp4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>更多参数可以参阅 <a href="https://ffmpeg.org/ffmpeg.html" target="_blank" rel="noreferrer">ffmpeg 文档</a>。</p></div></li></ol>`,51),D=[k];function f(A,_,x,E,B,F){return e(),a("div",null,D)}const V=s(g,[["render",f]]);export{S as __pageData,V as default};
