import{_ as a,c as s,o as e,a as n}from"./app.9b08bf72.js";const l="/assets/vlc.7ea49571.png",p="/assets/mpv.dc894486.png",r="/assets/dragon.31ca4d30.png",i="/assets/smplayer-1.b041225a.png",t="/assets/smplayer-2.9f739f21.png",o="/assets/parole.783af41a.png",c="/assets/zyplayer.edbc5d69.png",d="/assets/deadbeef-1.d4038c1e.png",u="/assets/deadbeef-2.75c2bd1d.png",h="/assets/juk.a7047b0e.png",m="/assets/yesplaymusic-1.d7ea01de.png",b="/assets/yesplaymusic-2.5f3ae739.png",y="/assets/listen1.4cac2a08.png",g="/assets/netease-cloud-music.948be2e9.png",C="/assets/official-qq-music.d730d460.png",S=JSON.parse('{"title":"视频影音","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"🎬 音视频播放器","slug":"🎬-音视频播放器","link":"#🎬-音视频播放器","children":[{"level":3,"title":"VLC","slug":"vlc","link":"#vlc","children":[]},{"level":3,"title":"mpv","slug":"mpv","link":"#mpv","children":[]},{"level":3,"title":"Dragon Player","slug":"dragon-player","link":"#dragon-player","children":[]},{"level":3,"title":"SMplayer","slug":"smplayer","link":"#smplayer","children":[]},{"level":3,"title":"parole","slug":"parole","link":"#parole","children":[]},{"level":3,"title":"ZY Player","slug":"zy-player","link":"#zy-player","children":[]}]},{"level":2,"title":"🎵 音乐播放器","slug":"🎵-音乐播放器","link":"#🎵-音乐播放器","children":[{"level":3,"title":"DeaDBeeF","slug":"deadbeef","link":"#deadbeef","children":[]},{"level":3,"title":"Juk","slug":"juk","link":"#juk","children":[]},{"level":3,"title":"YesPlayMusic（推荐）","slug":"yesplaymusic-推荐","link":"#yesplaymusic-推荐","children":[]},{"level":3,"title":"Listen 1（推荐）","slug":"listen-1-推荐","link":"#listen-1-推荐","children":[]},{"level":3,"title":"网易云音乐","slug":"网易云音乐","link":"#网易云音乐","children":[]},{"level":3,"title":"QQ 音乐","slug":"qq-音乐","link":"#qq-音乐","children":[]}]}],"relativePath":"app/common/media.md","lastUpdated":1677187157000}'),v={name:"app/common/media.md"},D=n(`<h1 id="视频影音" tabindex="-1">视频影音 <a class="header-anchor" href="#视频影音" aria-hidden="true">#</a></h1><blockquote><h3 id="🍵-采菊东篱下-悠然见南山" tabindex="-1">🍵 采菊东篱下，悠然见南山 <a class="header-anchor" href="#🍵-采菊东篱下-悠然见南山" aria-hidden="true">#</a></h3><p>本小节讨论在 archlinux 上观看视频，聆听音乐等相关信息。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🎬-音视频播放器">🎬 音视频播放器</a><ul><li><a href="#vlc">VLC</a></li><li><a href="#mpv">mpv</a></li><li><a href="#dragon-player">Dragon Player</a></li><li><a href="#smplayer">SMplayer</a></li><li><a href="#parole">parole</a></li><li><a href="#zy-player">ZY Player</a></li></ul></li><li><a href="#🎵-音乐播放器">🎵 音乐播放器</a><ul><li><a href="#deadbeef">DeaDBeeF</a></li><li><a href="#juk">Juk</a></li><li><a href="#yesplaymusic-推荐">YesPlayMusic（推荐）</a></li><li><a href="#listen-1-推荐">Listen 1（推荐）</a></li><li><a href="#网易云音乐">网易云音乐</a></li><li><a href="#qq-音乐">QQ 音乐</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🎬-音视频播放器" tabindex="-1">🎬 音视频播放器 <a class="header-anchor" href="#🎬-音视频播放器" aria-hidden="true">#</a></h2><p>本地音视频播放一般使用 VLC 或 MPV，但也有很多其它优秀的开源音视频播放器。</p><h3 id="vlc" tabindex="-1">VLC <a class="header-anchor" href="#vlc" aria-hidden="true">#</a></h3><p><a href="https://www.videolan.org/vlc/" target="_blank" rel="noreferrer">VLC</a> 是一款自由开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件，以及 DVD、音频 CD、VCD 及各类流媒体协议。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/vlc/" target="_blank" rel="noreferrer"><code>VLC</code></a><sup>extra / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-HTKfb" id="tab-4k5nsiY" checked="checked"><label for="tab-4k5nsiY">sh</label><input type="radio" name="group-HTKfb" id="tab-nWHXzA6"><label for="tab-nWHXzA6">sh</label><input type="radio" name="group-HTKfb" id="tab-5afhVWF"><label for="tab-5afhVWF">sh</label><input type="radio" name="group-HTKfb" id="tab-lRpj-pU"><label for="tab-lRpj-pU">sh</label></div><div class="blocks"><p>::: code-group-item extra</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vlc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item cn (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vlc-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur（obs）</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vlc-luajit</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/vlc-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+l+`" alt="vlc"></p><h3 id="mpv" tabindex="-1">mpv <a class="header-anchor" href="#mpv" aria-hidden="true">#</a></h3><p><a href="https://mpv.io/" target="_blank" rel="noreferrer">mpv</a> 是一个自由免费的媒体播放器。它支持多种媒体文件格式、音频和视频编解码器以及字幕类型。相比 VLC 更加简洁。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/mpv/" target="_blank" rel="noreferrer"><code>mpv</code></a><sup>community / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-7fExw" id="tab-Vdh39q5" checked="checked"><label for="tab-Vdh39q5">sh</label><input type="radio" name="group-7fExw" id="tab-OjKjHrS"><label for="tab-OjKjHrS">sh</label><input type="radio" name="group-7fExw" id="tab-_MnnXAh"><label for="tab-_MnnXAh">sh</label></div><div class="blocks"><p>::: code-group-item community</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mpv</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item cn (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mpv-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/mpv-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+p+`" alt="mpv"></p><h3 id="dragon-player" tabindex="-1">Dragon Player <a class="header-anchor" href="#dragon-player" aria-hidden="true">#</a></h3><p>Dragon Player 是 KDE 开发的一个相比于功能来说更注重简洁的多媒体播放器。Dragon Player 做且只做一件事，就是播放多媒体文件。界面简单、减少干扰、立即播放文件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/dragon/" target="_blank" rel="noreferrer"><code>Dragon Player</code></a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dragon</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+r+`" alt="dragon"></p><h3 id="smplayer" tabindex="-1">SMplayer <a class="header-anchor" href="#smplayer" aria-hidden="true">#</a></h3><p><a href="https://www.smplayer.info/" target="_blank" rel="noreferrer">SMPlayer</a> 是个适用于 Windows 和 Linux 的自由免费的媒体播放器，内置解码器，可以播放几乎所有格式的视频和音频文件。无需再安装任何外部解码器。只要安装了 SMPlayer，就能够播放所有的格式，不用再费事查找安装解码包。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/community/x86_64/smplayer/" target="_blank" rel="noreferrer"><code>SMplayer</code></a><sup>community / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-dZbFI" id="tab-aRahnkm" checked="checked"><label for="tab-aRahnkm">sh</label><input type="radio" name="group-dZbFI" id="tab-Te4Hhmg"><label for="tab-Te4Hhmg">sh</label></div><div class="blocks"><p>::: code-group-item community</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">smplayer</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur（svn）</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">smplayer-svn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div></li><li><p>默认的外观不太美观，可选安装皮肤 <a href="https://github.com/PapirusDevelopmentTeam/papirus-smplayer-theme" target="_blank" rel="noreferrer"><code>papirus-smplayer-theme-git</code></a><sup>aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">papirus-smplayer-theme-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>在设置中调整为下图即可：</p><p><img src="`+i+'" alt="smplayer-1"></p></li></ol><p><img src="'+t+`" alt="smplayer-2"></p><h3 id="parole" tabindex="-1">parole <a class="header-anchor" href="#parole" aria-hidden="true">#</a></h3><p>Xfce 开发的基于 GStreamer 框架的现代媒体播放器。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/parole/" target="_blank" rel="noreferrer"><code>parole</code></a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parole</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+o+`" alt="parole"></p><h3 id="zy-player" tabindex="-1">ZY Player <a class="header-anchor" href="#zy-player" aria-hidden="true">#</a></h3><p>如果想收看在线影视资源等等，<a href="https://aur.archlinux.org/packages/zy-player-bin/" target="_blank" rel="noreferrer">ZY Player</a> 是一个很好的选择。</p><p>ZY Player 是一个简洁、免费、无广告的跨平台视频资源播放器，整合全网资源，甚至可以观看 📺 IPTV（需自行配置直播源）。</p><p>安装 <a href="https://github.com/cuiocean/ZY-Player" target="_blank" rel="noreferrer"><code>ZY Player</code></a><sup>aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zy-player-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+c+`" alt="zyplayer"></p><h2 id="🎵-音乐播放器" tabindex="-1">🎵 音乐播放器 <a class="header-anchor" href="#🎵-音乐播放器" aria-hidden="true">#</a></h2><p>本地音乐播放可以使用上述的音视频播放器，也可以使用 DeaDBeeF（Linux 下的 <a href="https://www.foobar2000.org/" target="_blank" rel="noreferrer">foobar2000</a><sup>EULA</sup>）等播放器。</p><p>在线音乐收听可以使用官方的网易云音乐或企鹅的 QQ 音乐，但在 Linux 下体验不佳，且很久没有更新了。显然这些企业是不会愿意向 Linux 桌面投放精力的。推荐使用维护到位的自由开源软件，它们一般是资源整合类型的第三方客户端，曲库较为完整。</p><h3 id="deadbeef" tabindex="-1">DeaDBeeF <a class="header-anchor" href="#deadbeef" aria-hidden="true">#</a></h3><p><a href="https://deadbeef.sourceforge.io/" target="_blank" rel="noreferrer">DeaDBeeF</a> 是一个自由开源（<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.html" target="_blank" rel="noreferrer">GPLv2</a>）模块化的<strong>无损</strong>音频播放器，用于 GNU/Linux、*BSD、OpenSolaris、macOS 和其它类 UNIX 系统。</p><p>DeaDBeeF 可以播放各种音频格式，在它们之间进行转换，以几乎任何想要的方式自定义 UI，并使用许多额外的插件来扩展它。</p><p>安装 <a href="https://aur.archlinux.org/packages/deadbeef" target="_blank" rel="noreferrer"><code>deadbeef</code></a><sup>cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-2Bm1M" id="tab-ZkAaRW4" checked="checked"><label for="tab-ZkAaRW4">sh</label><input type="radio" name="group-2Bm1M" id="tab-86e3MG4"><label for="tab-86e3MG4">sh</label><input type="radio" name="group-2Bm1M" id="tab-u5Qt3F4"><label for="tab-u5Qt3F4">sh</label><input type="radio" name="group-2Bm1M" id="tab-czobniy"><label for="tab-czobniy">sh</label></div><div class="blocks"><p>::: code-group-item cn</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deadbeef</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item cn (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deadbeef-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/deadbeef</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/deadbeef-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+d+'" alt="deadbeef-1"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>若音乐无法正常播放，请将菜单栏 <code>编辑</code> &gt; <code>偏好设置</code> &gt; 标签页 <code>声音</code> &gt; <code>输出插件</code> 改为其它选项：</p><p><img src="'+u+`" alt="deadbeef-2"></p></div><h3 id="juk" tabindex="-1">Juk <a class="header-anchor" href="#juk" aria-hidden="true">#</a></h3><p>JuK 是 KDE 开发的一款音乐播放器和管理程序，支持 MP3、Ogg Vorbis 和 FLAC 等音频文件。它侧重于音乐管理功能，可以用它编辑音频文件的标签、管理音乐和播放列表。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/juk/" target="_blank" rel="noreferrer"><code>juk</code></a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">juk</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+h+`" alt="juk"></p><h3 id="yesplaymusic-推荐" tabindex="-1">YesPlayMusic（推荐） <a class="header-anchor" href="#yesplaymusic-推荐" aria-hidden="true">#</a></h3><p>高颜值的第三方网易云播放器，显著的优点包括但不限于：</p><ul><li>☑️ 使用 Vue.js 全家桶开发</li><li>🔴 网易云账号登录（扫码/手机/邮箱登录）</li><li>📺 支持 MV 播放</li><li>📃 支持歌词显示</li><li>📻 支持私人 FM / 每日推荐歌曲</li><li>🚫🤝 无任何社交功能</li><li>🌎 海外用户可直接播放（需要登录网易云账号）</li></ul><p>安装 <a href="https://github.com/qier222/YesPlayMusic" target="_blank" rel="noreferrer"><code>YesPlayMusic</code></a><sup>aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yesplaymusic</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+m+'" alt="yesplaymusic-1"></p><p><img src="'+b+`" alt="yesplaymusic-2"></p><h3 id="listen-1-推荐" tabindex="-1">Listen 1（推荐） <a class="header-anchor" href="#listen-1-推荐" aria-hidden="true">#</a></h3><p>Listen 1 作为“老牌”的听歌软件可以搜索和播放来自网易云音乐、虾米、QQ 音乐、酷狗音乐、酷我音乐、Bilibili、咪咕音乐网站的歌曲，让你的曲库更全面。</p><p>安装 <a href="https://aur.archlinux.org/packages/listen1-desktop-appimage/" target="_blank" rel="noreferrer"><code>Listen 1</code></a><sup>aur</sup>：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listen1-desktop-appimage</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+y+`" alt="listen1"></p><h3 id="网易云音乐" tabindex="-1">网易云音乐 <a class="header-anchor" href="#网易云音乐" aria-hidden="true">#</a></h3><p>不推荐使用，建议使用上述第三方客户端。</p><p>网易和深度合作开发的客户端。已经很久没更新了，无法输入中文并且缩放有问题。</p><p>安装 <a href="https://aur.archlinux.org/packages/netease-cloud-music/" target="_blank" rel="noreferrer"><code>netease-cloud-music</code></a><sup>EULA / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Dzf44" id="tab-3vvYOdD" checked="checked"><label for="tab-3vvYOdD">sh</label><input type="radio" name="group-Dzf44" id="tab-Xw5DFrw"><label for="tab-Xw5DFrw">sh</label></div><div class="blocks"><p>::: code-group-item cn</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">netease-cloud-music</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/netease-cloud-music</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+g+`" alt="netease-cloud-music"></p><h3 id="qq-音乐" tabindex="-1">QQ 音乐 <a class="header-anchor" href="#qq-音乐" aria-hidden="true">#</a></h3><p>不推荐使用，建议使用上述第三方客户端。</p><p>基于 <code>deepin-wine5</code> 的 QQ 音乐 <a href="https://aur.archlinux.org/packages/com.qq.music.deepin/" target="_blank" rel="noreferrer"><code>com.qq.music.deepin</code></a><sup>EULA / aur</sup> 已无法下载，只能用官方的原生 QQ 音乐：</p><p>安装 <a href="https://aur.archlinux.org/packages/qqmusic-bin/" target="_blank" rel="noreferrer"><code>qqmusic-bin</code></a><sup>aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">qqmusic-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+C+'" alt="official-qq-music"></p>',75),f=[D];function A(k,_,x,E,F,B){return e(),s("div",null,f)}const q=a(v,[["render",A]]);export{S as __pageData,q as default};
