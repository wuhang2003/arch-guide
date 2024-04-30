import{_ as a,c as e,o as i,a4 as t}from"./chunks/framework.DhooLXd5.js";const s="/assets/wallpaper.BYxwTN32.png",l="/assets/avatar.BFg9PTsw.png",o="/assets/mixer.k3mljWQ1.png",p="/assets/weather-widget.DmD5y1kM.png",c="/assets/split-digital-clock-1.CK5HsdiF.png",d="/assets/split-digital-clock-2.CA1FtPss.png",n="/assets/split-digital-clock-3.DlBSSYdt.png",r="/assets/avalon-menu.DXZ_d_nF.png",g="/assets/netspeed-widget.Dh4jnc-d.png",h="/assets/menu-bar-layout-1.DlJKmHhb.png",u="/assets/menu-bar-layout-2.Cm4UvLCT.png",m="/assets/menu-bar-layout-3.DFiUhzOU.png",k="/assets/menu-bar-layout-4.Ciq5s3Zd.png",b="/assets/menu-bar-layout-5.B807NvHz.png",_="/assets/menu-bar-layout-6.dqh2BalJ.png",y="/assets/menu-bar-layout-7.B_HR17xg.png",v="/assets/menu-bar-layout-8.C1H3TdP0.png",F="/assets/menu-bar-layout-9.DCrTteYA.png",C="/assets/menu-bar-layout-10.5iXrznXx.png",f="/assets/menu-bar-layout-11.DJT17QLm.png",x="/assets/dock-layout-1.DjQzigRx.png",D="/assets/dock-layout-2.Dnl7H55b.png",B="/assets/dock-layout-3.i7TekCas.png",w="/assets/dock-layout-4.BS7jJRmR.png",q="/assets/dock-layout-5.BT0AsiSH.png",S="/assets/dock-layout-6.DBVT5tC5.png",P="/assets/dock-layout-7.CKbs3IGm.png",A="/assets/dock-layout-8.sNlZGqxc.png",W="/assets/dock-layout-9.DY4qqXJ-.png",E="/assets/dock-layout-10.CtWSorw3.png",L="/assets/dock-layout-11.BLjSHLFI.png",T="/assets/detail-1.BQMwVVuz.png",M="/assets/detail-2.CiQZeKYj.png",K="/assets/split-digital-clock-cfg-1.CoXFofxK.png",N="/assets/split-digital-clock-cfg-2.BpxFFGls.png",H="/assets/split-digital-clock-cfg-3.CMNmPAyt.png",Q=JSON.parse('{"title":"archlinux 系统美化（布局篇）","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/beauty-1.md","filePath":"guide/advanced/beauty-1.md","lastUpdated":1687091283000}'),X={name:"guide/advanced/beauty-1.md"},j=t('<h1 id="archlinux-系统美化-布局篇" tabindex="-1">archlinux 系统美化（布局篇） <a class="header-anchor" href="#archlinux-系统美化-布局篇" aria-label="Permalink to &quot;archlinux 系统美化（布局篇）&quot;">​</a></h1><blockquote><h3 id="🌺-爱美之心-人皆有之" tabindex="-1">🌺 爱美之心，人皆有之 <a class="header-anchor" href="#🌺-爱美之心-人皆有之" aria-label="Permalink to &quot;🌺 爱美之心，人皆有之&quot;">​</a></h3><p>美化这个话题是永恒的。有些人用 Linux 的原因就是一开始被美化后桌面的截图惊艳到了</p><p>这一小节将会介绍如何对 KDE 桌面环境进行美化。受限于篇幅，本小节分为上下篇</p><p>从本章开始，过程将不会讲述的特别细节，根据界面提示操作即可</p></blockquote><p>需要说明的是，不要过度美化！过度美化可能导致系统稳定性和性能下降等后果。</p><p>当然，尊重用户的个人选择，这也是 arch 之道。</p><p>本节介绍的步骤建议按顺序进行，<strong>您可以选择在任何一步收手</strong>，因为剩下的步骤可能显得多余，甚至可能适得其反。</p><p>同时，本小节将介绍两种桌面布局方式 —— 一种是传统的类似 Windows 的菜单栏布局，另一种是类似 macOS 的 Dock 栏布局。</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>若使用虚拟机，请不要过度美化！否则会降低性能甚至卡死。</p></div><h2 id="_0-换一张漂亮的壁纸" tabindex="-1">0. 换一张漂亮的壁纸 <a class="header-anchor" href="#_0-换一张漂亮的壁纸" aria-label="Permalink to &quot;0. 换一张漂亮的壁纸&quot;">​</a></h2><ol><li><p>在桌面右键 &gt; 选择 <code>配置桌面和壁纸...</code></p></li><li><p>在设置窗口：</p><ul><li>选择 <code>添加图片</code> &gt; 选择你想要的图片</li><li>选择刚才添加的图片 &gt; 点击 <code>应用</code></li></ul><p><img src="'+s+'" alt="wallpaper"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p><code>壁纸类型</code> 可更改为：</p><ul><li><code>幻灯片</code> —— 若希望壁纸能够定时轮换</li><li><code>每日一图</code> &gt; 将 <code>提供</code> 改为喜欢的来源（如 <code>必应</code>，这将和 <a href="https://cn.bing.com" target="_blank" rel="noreferrer">必应</a> 的背景图片保持一致）</li></ul></div></li></ol><h2 id="_1-更改用户头像" tabindex="-1">1. 更改用户头像 <a class="header-anchor" href="#_1-更改用户头像" aria-label="Permalink to &quot;1. 更改用户头像&quot;">​</a></h2><p>打开 <code>系统设置</code> &gt; 点击侧栏 <code>用户</code> &gt; 点击头像即可更改：</p><p><img src="'+l+'" alt="avatar"></p><h2 id="_2-确认显示特效混合器-混成器、合成器-状态" tabindex="-1">2. 确认显示特效混合器（混成器、合成器）状态 <a class="header-anchor" href="#_2-确认显示特效混合器-混成器、合成器-状态" aria-label="Permalink to &quot;2. 确认显示特效混合器（混成器、合成器）状态&quot;">​</a></h2><ol><li><p>打开 <code>系统设置</code> &gt; 点击侧栏 <code>显卡与显示器</code> &gt; <code>显示特效合成器</code></p></li><li><p>确认显示特效合成器运行状态：</p><p><img src="'+o+'" alt="mixer"></p></li></ol><h2 id="_3-修改桌面布局" tabindex="-1">3. 修改桌面布局 <a class="header-anchor" href="#_3-修改桌面布局" aria-label="Permalink to &quot;3. 修改桌面布局&quot;">​</a></h2><p>桌面布局之前，需要了解一些基本的概念：</p><ul><li>KDE 桌面中无论是菜单栏还是顶栏，本质上都是<strong>面板</strong></li><li>面板上的元素（如托盘图标、数字时钟、网速显示、开始菜单图标）等都是<strong>小组件</strong></li><li>小组件可以放置在面板里，也可以独立存在</li></ul><p>更改桌面布局，本质上就是<strong>调整面板和小组件的位置以及样式</strong>。</p><h3 id="_3-0-安装常用小组件" tabindex="-1">3-0. 安装常用小组件 <a class="header-anchor" href="#_3-0-安装常用小组件" aria-label="Permalink to &quot;3-0. 安装常用小组件&quot;">​</a></h3><h4 id="weather-widget" tabindex="-1">Weather Widget <a class="header-anchor" href="#weather-widget" aria-label="Permalink to &quot;Weather Widget&quot;">​</a></h4><p>天气插件。相比 KDE 自带的天气插件显示信息更加详细，也不会经常刷新不出天气信息。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/plasma5-applets-weather-widget/" target="_blank" rel="noreferrer">Weather Widget</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-45CXN" id="tab-MzAWGgK" checked="checked"><label for="tab-MzAWGgK">extra</label><input type="radio" name="group-45CXN" id="tab-9gBCIL-"><label for="tab-9gBCIL-">aur (git)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plasma5-applets-weather-widget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qt5-xmlpatterns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 必须安装</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/plasma5-applets-weather-widget-git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qt5-xmlpatterns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 必须安装</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+p+'" alt="weather-widget"></p><h4 id="split-digital-clock" tabindex="-1">Split Digital Clock <a class="header-anchor" href="#split-digital-clock" aria-label="Permalink to &quot;Split Digital Clock&quot;">​</a></h4><p>放置在桌面的数字时钟。简单配置后可以很好看。</p><ol><li><p>在桌面右键 &gt; 点击 <code>添加部件</code>：</p><p><img src="'+c+'" alt="split-digital-clock-1"></p></li><li><p>点击 <code>获取新部件...</code> &gt; <code>下载新 Plasma 部件</code>：</p><p><img src="'+d+'" alt="split-digital-clock-2"></p></li><li><p>搜索小部件名 <code>Split Digital Clock</code> &gt; 点击 <code>安装</code>：</p><p><img src="'+n+'" alt="split-digital-clock-3"></p></li></ol><h4 id="avalon-menu" tabindex="-1">Avalon Menu <a class="header-anchor" href="#avalon-menu" aria-label="Permalink to &quot;Avalon Menu&quot;">​</a></h4><p>程序启动器（开始菜单）。相比 KDE 自带的程序启动器更加简洁大方。</p><p>同上，搜索小部件名 <code>Avalon Menu</code> &gt; 点击 <code>安装</code>：</p><p><img src="'+r+'" alt="avalon-menu"></p><h4 id="netspeed-widget" tabindex="-1">Netspeed Widget <a class="header-anchor" href="#netspeed-widget" aria-label="Permalink to &quot;Netspeed Widget&quot;">​</a></h4><p>安装 <a href="https://aur.archlinux.org/packages/plasma5-applets-netspeed/" target="_blank" rel="noreferrer">Netspeed Widget</a><sup>aur</sup>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plasma5-applets-netspeed</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+g+'" alt="netspeed-widget"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>其它小部件根据喜好自行安装即可。常用的还有：</p><ul><li><a href="https://github.com/dhabyx/plasma-simpleMonitor" target="_blank" rel="noreferrer">Simple System Monitor</a> —— 系统信息</li></ul></div><h3 id="_3-1-菜单栏布局" tabindex="-1">3-1. 菜单栏布局 <a class="header-anchor" href="#_3-1-菜单栏布局" aria-label="Permalink to &quot;3-1. 菜单栏布局&quot;">​</a></h3><p>KDE 默认即菜单栏布局。只需调整一下小部件的位置和样式即可。</p><ol><li><p>右键菜单栏 &gt; 点击 <code>编辑面板...</code>：</p><p><img src="'+h+'" alt="menu-bar-layout-1"></p></li><li><p>点击 <code>添加部件...</code> &gt; 将 <code>Avalon Menu</code> 拖放至菜单栏左侧：</p><p><img src="'+u+'" alt="menu-bar-layout-2"></p><p><img src="'+m+'" alt="menu-bar-layout-3"></p></li><li><p>再次 <code>编辑面板...</code> &gt; 将光标移动悬停在原来的程序启动器上 &gt; 点击 <code>移除</code>：</p><p><img src="'+k+'" alt="menu-bar-layout-4"></p></li><li><p>类似的，将 <code>Netspeed Widget</code> 和 <code>Weather Widget</code> 拖放至合适位置：</p><p><img src="'+b+'" alt="menu-bar-layout-5"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>您可能需要调整 <code>面板高度</code> 以使得小组件显示符合期望。</p></div></li><li><p>再次 <code>编辑面板...</code> &gt; 将光标移动悬停在 <code>Weather Widget</code> 上 &gt; 点击 <code>配置</code></p></li><li><p>将默认的两个城市删掉：</p><p><img src="'+_+'" alt="menu-bar-layout-6"></p></li><li><p>进入 <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather</a> 网站 &gt; 搜索需要显示的城市 &gt; 将网址复制下来：</p><p><img src="'+y+'" alt="menu-bar-layout-7"></p></li><li><p>点击 <code>＋ OWM</code> &gt; 将复制的网址和城市名称填入 &gt; 点击 <code>确定</code> &gt; <code>应用</code>：</p><p><img src="'+v+'" alt="menu-bar-layout-8"></p><p><img src="'+F+'" alt="menu-bar-layout-9"></p></li><li><p>点击侧栏 <code>外观</code> &gt; 调整为喜欢的样式 &gt; 点击 <code>应用</code>：</p><p><img src="'+C+'" alt="menu-bar-layout-10"></p></li><li><p>查看效果：</p><p><img src="'+f+'" alt="menu-bar-layout-11"></p></li></ol><h3 id="_3-2-dock-栏布局" tabindex="-1">3-2. Dock 栏布局 <a class="header-anchor" href="#_3-2-dock-栏布局" aria-label="Permalink to &quot;3-2. Dock 栏布局&quot;">​</a></h3><ol><li><p>为了实现 Dock 栏布局，需要安装 <a href="https://github.com/KDE/latte-dock" target="_blank" rel="noreferrer">Latte</a><sup>extra / cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_Wov_" id="tab-hdZYLi-" checked="checked"><label for="tab-hdZYLi-">extra</label><input type="radio" name="group-_Wov_" id="tab-7kuwFt8"><label for="tab-7kuwFt8">cn (git)</label><input type="radio" name="group-_Wov_" id="tab-AXujnyF"><label for="tab-AXujnyF">aur (git)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latte-dock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latte-dock-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/latte-dock-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>进入 <code>编辑面板...</code> &gt; 通过拖拽 <code>屏幕边缘</code> 按钮将菜单栏拖拽至底部或左右侧：</p><p><img src="'+x+'" alt="dock-layout-1"></p></li><li><p>尝试在终端打开 Latte：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latte-dock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+D+'" alt="dock-layout-2"></p></li><li><p>默认 Latte 已经将自己添加到开机自动启动中了，打开 <code>系统设置</code> &gt; 点击侧栏 <code>开机与关机</code> &gt; <code>自动启动</code> 复查一下：</p><p><img src="'+B+'" alt="dock-layout-3"></p></li><li><p>重启，查看效果</p></li><li><p>右键 Latte 面板 &gt; 点击 <code>Edit Dock...</code>：</p><p><img src="'+w+'" alt="dock-layout-4"></p></li><li><p>点击 <code>Advanced</code> 以启用高级设置：</p><p><img src="'+q+'" alt="dock-layout-5"></p></li><li><p>将 <code>Dock</code> 更改为 <code>Panel</code>：</p><p><img src="'+S+'" alt="dock-layout-6"></p></li><li><p>在设置中进行如下更改：</p><ul><li>在标签页 <code>Behavior</code>（行为）： <ul><li><code>Alignment</code>（对齐）： <ul><li><code>Left</code>（左对齐）</li><li><code>Center</code>（居中对齐，<strong>推荐设置</strong>）</li><li><code>Right</code>（右对齐）</li><li><code>Justify</code>（平铺）</li></ul></li><li><code>Visibility</code>（可见性）： <ul><li><code>Always Visible</code>（保持可见，但窗口不会在 Dock 栏下方）</li><li><code>Dodge Active</code>（避开活动窗口，<strong>推荐设置</strong>）</li><li><code>Windows Go Below</code>（保持可见，窗口在下方，<strong>推荐设置</strong>）</li><li><code>Auto Hide</code>（自动隐藏，在鼠标靠近时显示）</li><li><code>Dodge Maximized</code>（只在全屏显示窗口时隐藏，<strong>推荐设置</strong>）</li><li><code>Dodge All Windows</code>（有窗口时隐藏）</li><li><code>On Demand Sidebar</code>（按需隐藏侧边栏，只有当外部程序作用时响应）</li><li><code>Auto Hide Sidebar</code>（自动隐藏侧边栏，只有当外部程序作用时响应）</li></ul></li></ul></li><li>在标签页 <code>Appearence</code>（外观）： <ul><li><code>Items</code>（项目）： <ul><li>将 <code>Zoom on hover</code>（悬停时缩放比例）调整为 <code>85%</code> 或合适大小</li></ul></li><li><code>Margins</code>（外边距）： <ul><li>将 <code>Screen edge</code>（屏幕边缘距离）调整为 <code>8px</code> 或合适大小</li></ul></li><li><code>Background</code>（背景）： <ul><li>将 <code>Radius</code>（圆角）调整为 <code>16px</code> 或合适大小</li></ul></li></ul></li></ul><p>其它选项保持默认或按需调整即可。</p></li><li><p>点击 <code>Close</code> 完成更改：</p><p><img src="'+P+'" alt="dock-layout-7"></p></li><li><p>类似的，右键 Latte 面板 &gt; 点击 <code>Add Widgets...</code>（添加小部件） &gt; 将小部件拖拽至合适位置即可</p></li><li><p>将常用的应用也可以通过拖拽的方式（可能需要先创建快捷方式到桌面）或打开应用之后右键固定项目（<code>Pin Launcher</code>）固定到 Latte 面板：</p><p><img src="'+A+'" alt="dock-layout-8"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>特别地，若要改变小部件的顺序或配置小部件：</p><ol><li><p>右键 Latte 面板 &gt; 点击 <code>Edit Dock...</code></p></li><li><p>点击 <code>Rearrange and configure your widgets</code>（重新排序和配置小部件）</p></li><li><p>将光标悬停到对应小部件进行相关操作：</p><p><img src="'+W+'" alt="dock-layout-9"></p></li></ol></div></li><li><p>调整顶栏（原菜单栏）的高度，相关小组件位置和样式等：</p><ul><li><p>通过点击 <code>添加间距</code> 添加两个 <code>面板间距</code> 在 <code>数字时钟</code> 两侧即可自动使时间居中</p><p><img src="'+E+'" alt="dock-layout-10"></p></li><li><p>添加全局菜单即可使菜单显示在顶栏中（类似 macOS）：</p><p><img src="'+L+'" alt="dock-layout-11"></p></li></ul></li></ol><h3 id="_3-3-调整细节" tabindex="-1">3-3. 调整细节 <a class="header-anchor" href="#_3-3-调整细节" aria-label="Permalink to &quot;3-3. 调整细节&quot;">​</a></h3><ol><li><p>配置系统托盘，将不需要的项目隐藏：</p><p><img src="'+T+'" alt="detail-1"></p></li><li><p>部分应用需要设置为对应的主题模式（暗色 / 亮色）：</p><p><img src="'+M+'" alt="detail-2"></p></li></ol><h2 id="_4-配置小组件" tabindex="-1">4. 配置小组件 <a class="header-anchor" href="#_4-配置小组件" aria-label="Permalink to &quot;4. 配置小组件&quot;">​</a></h2><h3 id="_4-1-配置-split-digital-clock" tabindex="-1">4-1. 配置 Split Digital Clock <a class="header-anchor" href="#_4-1-配置-split-digital-clock" aria-label="Permalink to &quot;4-1. 配置 Split Digital Clock&quot;">​</a></h3><ol><li><p>在 <a href="https://fonts.google.com/specimen/Pacifico" target="_blank" rel="noreferrer">Google Fonts</a> 上点击右上角的 <code>Download family</code> 下载 Pacifico 字体</p></li><li><p>解压后安装字体：</p><p><img src="'+K+'" alt="split-digital-clock-cfg-1"></p></li><li><p>将 Split Digital Clock 拖拽到桌面后配置：</p><ul><li>更改 <code>Font Style</code> 为 <code>Pacifico</code></li><li>勾选 <code>Show Date</code></li><li>调整 <code>Color of text</code> 为 <code>#ffffff</code> 或合适颜色</li><li>调整小部件为合适大小</li></ul><p><img src="'+N+'" alt="split-digital-clock-cfg-2"></p></li><li><p>查看效果：</p><p><img src="'+H+'" alt="split-digital-clock-cfg-3"></p></li></ol>',46),z=[j];function R(V,G,I,J,O,Y){return i(),e("div",null,z)}const U=a(X,[["render",R]]);export{Q as __pageData,U as default};
