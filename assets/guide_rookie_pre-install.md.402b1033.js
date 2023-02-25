import{_ as e,a}from"./chunks/pre-virt_vb-18.7338228b.js";import{_ as i,c as r,o as t,a as s}from"./app.9b08bf72.js";const o="/assets/uefi-1.fb022b90.png",c="/assets/tuna.efeb9684.png",l="/assets/huawei.b0456715.png",n="/assets/download-speed.f76ea1c9.png",d="/assets/ethcer.c2982433.png",p="/assets/disk-1.657b2a39.png",h="/assets/disk-2.af89623f.png",u="/assets/disk-3.6945ce72.png",_="/assets/uefi-2.c7435be4.png",f="/assets/uefi-3.d04c97fb.png",b="/assets/uefi-4.a06ef4a8.png",g="/assets/uefi-5.fac8b9b7.png",m="/assets/uefi-6.af57f80a.png",k="/assets/uefi-7.3c99aa5a.png",w="/assets/uefi-8.4b7d389c.png",x="/assets/uefi-9.dafaeb3b.png",M=JSON.parse('{"title":"安装前的准备","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 确保网络环境","slug":"_1-确保网络环境","link":"#_1-确保网络环境","children":[]},{"level":2,"title":"2. 下载安装镜像","slug":"_2-下载安装镜像","link":"#_2-下载安装镜像","children":[]},{"level":2,"title":"3. 刻录安装 U 盘","slug":"_3-刻录安装-u-盘","link":"#_3-刻录安装-u-盘","children":[{"level":3,"title":"3-1. Windows","slug":"_3-1-windows","link":"#_3-1-windows","children":[]},{"level":3,"title":"3-2. Linux","slug":"_3-2-linux","link":"#_3-2-linux","children":[]}]},{"level":2,"title":"4. 为 archlinux 分出硬盘空间（可选）","slug":"_4-为-archlinux-分出硬盘空间-可选","link":"#_4-为-archlinux-分出硬盘空间-可选","children":[]},{"level":2,"title":"5. 获取 Bitlocker 恢复密钥","slug":"_5-获取-bitlocker-恢复密钥","link":"#_5-获取-bitlocker-恢复密钥","children":[]},{"level":2,"title":"6. 进入主板 BIOS 进行设置","slug":"_6-进入主板-bios-进行设置","link":"#_6-进入主板-bios-进行设置","children":[]},{"level":2,"title":"7. 关闭 BIOS 设置中的 Secure Boot","slug":"_7-关闭-bios-设置中的-secure-boot","link":"#_7-关闭-bios-设置中的-secure-boot","children":[]},{"level":2,"title":"8. 调整启动方式为 UEFI（可能不需要）","slug":"_8-调整启动方式为-uefi-可能不需要","link":"#_8-调整启动方式为-uefi-可能不需要","children":[]},{"level":2,"title":"9. 调整硬盘启动顺序","slug":"_9-调整硬盘启动顺序","link":"#_9-调整硬盘启动顺序","children":[]},{"level":2,"title":"10. 保存 BIOS 设置","slug":"_10-保存-bios-设置","link":"#_10-保存-bios-设置","children":[]},{"level":2,"title":"11. 准备安装","slug":"_11-准备安装","link":"#_11-准备安装","children":[]}],"relativePath":"guide/rookie/pre-install.md","lastUpdated":1677183719000}'),v={name:"guide/rookie/pre-install.md"},B=s('<h1 id="安装前的准备" tabindex="-1">安装前的准备 <a class="header-anchor" href="#安装前的准备" aria-hidden="true">#</a></h1><blockquote><h3 id="🧭-凡事预则立-不预则废" tabindex="-1">🧭 凡事预则立，不预则废 <a class="header-anchor" href="#🧭-凡事预则立-不预则废" aria-hidden="true">#</a></h3><p>这一章开始，我们正式开始安装 archlinux。但是我们首先要做一些准备工作。</p></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>由于当前 UEFI 已普及十余年，安装将全部以 <code>UEFI + GPT</code> 的形式进行，传统 <code>BIOS</code> 方式不再赘述。</p></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="_1-确保网络环境" tabindex="-1">1. 确保网络环境 <a class="header-anchor" href="#_1-确保网络环境" aria-hidden="true">#</a></h2><p>如果你可以使用路由器分接出来的网线，以 dhcp 的方式直接上网，那么不用准备什么。如果你的环境只能使用无线网络安装，需要事先把自己所用的 wifi 名称改成自己能记住的英文名称。因为<strong>安装时无法显示和输入中文名的 wifi</strong>，你会看到一堆不知道是什么的方块，并且在安装过程中你将没有办法输入中文的无线名称进行连接。</p><p><img src="'+o+'" alt="wireless-network-card-switch"></p><p>其次，有些笔记本电脑上存在无线网卡的硬件开关或者键盘控制，开机后安装前需要<strong>确保你的无线网卡硬件开关处于打开状态</strong>。</p><h2 id="_2-下载安装镜像" tabindex="-1">2. 下载安装镜像 <a class="header-anchor" href="#_2-下载安装镜像" aria-hidden="true">#</a></h2><p>安装镜像 iso 在开源镜像站（推荐）或者 <a href="https://archlinux.org/download/" target="_blank" rel="noreferrer">archlinux 官方下载页面</a> 下载。</p><p>下面是国内常用的提供 archlinux 安装镜像的开源镜像站（选一个即可）：</p><ul><li><a href="http://mirrors.ustc.edu.cn/" target="_blank" rel="noreferrer">中国科学技术大学开源镜像站</a></li><li><a href="https://mirrors.tuna.tsinghua.edu.cn/" target="_blank" rel="noreferrer">清华大学开源软件镜像站</a></li><li><a href="https://repo.huaweicloud.com/archlinux/" target="_blank" rel="noreferrer">华为开源镜像站</a></li><li><a href="https://mirror.lzu.edu.cn/archlinux/" target="_blank" rel="noreferrer">兰州大学开源镜像站</a></li></ul><p><img src="'+c+'" alt="清华大学开源软件镜像站"></p><p>其中前两者点击网页右侧侧栏的获取下载链接，选择 archlinux 下载即可。</p><p><img src="'+l+'" alt="华为开源镜像站"></p><p>后两者需要依次点击 <code>iso</code> &gt; <code>20XX.XX.XX</code> &gt; <code>archlinux-20XX.XX.XX-x86_64.iso</code>。</p><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>请确保下载最新的安装镜像！因为 archlinux 是滚动发行版，不存在使用旧的安装镜像安装旧版本的说法。</p><p>这里也可以看出 archlinux 每月 1 日释出新的安装镜像。</p></div><p><img src="'+n+'" alt="download-speed"></p><p>中科大的开源镜像站下载速度还是很快的。</p><h2 id="_3-刻录安装-u-盘" tabindex="-1">3. 刻录安装 U 盘 <a class="header-anchor" href="#_3-刻录安装-u-盘" aria-hidden="true">#</a></h2><p>准备一个 2G 以上的 U 盘，刻录一个安装盘。</p><h3 id="_3-1-windows" tabindex="-1">3-1. Windows <a class="header-anchor" href="#_3-1-windows" aria-hidden="true">#</a></h3><p>Windows 下推荐使用 <a href="https://www.ventoy.net/cn/doc_start.html" target="_blank" rel="noreferrer">Ventoy</a>、<a href="https://rufus.ie/" target="_blank" rel="noreferrer">Rufus</a> 或者 <a href="https://www.poweriso.com/download.php" target="_blank" rel="noreferrer">Power ISO</a><sup>EULA</sup> 进行 U 盘刻录。三者皆为免费使用的软件。具体操作请自行查阅，都非常简单。</p><p>除此之外，如果你还嫌麻烦，还可以使用更为简单的安装盘制作工具 <a href="https://www.balena.io/etcher/" target="_blank" rel="noreferrer">balenaEtcher</a>：</p><p><img src="'+d+'" alt="ethcer"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>使用 balenaEtcher 制作完成的安装盘若要重新作为普通 U 盘使用，需要用磁盘分区管理工具（如 <a href="https://apps.kde.org/partitionmanager/" target="_blank" rel="noreferrer">KDE 分区管理器</a>、<a href="https://www.diskgenius.cn/" target="_blank" rel="noreferrer">DiskGenius</a><sup> EULA</sup>）重建分区表才能正常格式化。</p></div><h3 id="_3-2-linux" tabindex="-1">3-2. Linux <a class="header-anchor" href="#_3-2-linux" aria-hidden="true">#</a></h3><p>Linux 下同样可以使用 Ventoy 和 balenaEtcher，具体步骤可参阅 <a href="./../advanced/make-install-disk.html#ventoy-推荐">Ventoy（推荐）</a> 以及 <a href="./../advanced/make-install-disk.html#balenaetcher">balenaEtcher</a>。</p><p>也可以直接用 <code>dd</code> 命令进行刻录，具体步骤可参阅 <a href="/advanced/make-install-disk.html#dd-命令">dd 命令</a>。</p><h2 id="_4-为-archlinux-分出硬盘空间-可选" tabindex="-1">4. 为 archlinux 分出硬盘空间（可选） <a class="header-anchor" href="#_4-为-archlinux-分出硬盘空间-可选" aria-hidden="true">#</a></h2><p>如果目标是双系统（win10 + archlinux），并且 win10 和 archlinux 将要共存在一个硬盘上的话，往往要在 win10 使用的分区上分出空闲硬盘空间给 archlinux。这里建议<strong>至少分 <code>128GB</code> 给 archlinux</strong>。</p><p><img src="'+p+'" alt="disk-step_1"></p><ol><li><p>右键点击 <code>开始菜单</code> &gt; 点击 <code>磁盘管理</code></p><p><img src="'+h+'" alt="disk-step_2"></p></li><li><p>右键点击 <code>需要压缩的分区</code> &gt; 点击 <code>压缩卷</code></p><p><img src="'+u+'" alt="disk-step_3"></p></li><li><p>在 <code>输入压缩空间量(MB)</code> 输入需要分给 archlinux 的空闲硬盘空间大小。假设分配 <code>128GB</code> 则输入 <code>131072</code>（1GB = 1024MB，128GB = 128 * 1024MB = 131072MB）</p></li><li><p>点击 <code>压缩</code>，完成之后关闭磁盘管理即可</p></li></ol><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>请不要做多余的动作！不要在这里为分出的硬盘空间创建分区！</p></div><h2 id="_5-获取-bitlocker-恢复密钥" tabindex="-1">5. 获取 Bitlocker 恢复密钥 <a class="header-anchor" href="#_5-获取-bitlocker-恢复密钥" aria-hidden="true">#</a></h2><p>若 win10 分区使用了 🔐 Bitlocker 加密，请提前获取恢复密钥。</p><p>关于解锁密钥的查找请参阅 <a href="https://support.microsoft.com/zh-cn/windows/%E5%9C%A8-windows-10-%E4%B8%AD%E6%9F%A5%E6%89%BE-bitlocker-%E6%81%A2%E5%A4%8D%E5%AF%86%E9%92%A5-6b71ad27-0b89-ea08-f143-056f5ab347d6" target="_blank" rel="noreferrer">Microsoft 相关页面</a>。</p><p>一般来说使用与 win10 相同的微软账号登录 <a href="https://aka.ms/myrecoverykey" target="_blank" rel="noreferrer">aka.ms 相关页面</a> 即可获取。</p><h2 id="_6-进入主板-bios-进行设置" tabindex="-1">6. 进入主板 BIOS 进行设置 <a class="header-anchor" href="#_6-进入主板-bios-进行设置" aria-hidden="true">#</a></h2><p><strong>插入优盘并开机</strong>。在开机的时候，按下 <code>F2</code> / <code>F8</code> / <code>F10</code> / <code>DEL</code> 等（取决与你的主板型号，具体请查阅你主板的相关信息）按键，进入主板的 BIOS 设置界面。</p><p>除此之外，如果你还嫌麻烦，还可以使用以下方法进入 BIOS：</p><ol><li><p>在 win10 下 按住 <code>Shift</code> 键同时点击 <code>重启</code></p><p><img src="'+_+'" alt="uefi-step_1"></p></li><li><p>保持按住 <code>Shift</code> 键直到进入如图所示界面</p><p><img src="'+f+'" alt="uefi-step_2"></p></li><li><p>选择 <code>疑难解答</code> 并回车 <code>Enter</code></p><p><img src="'+b+'" alt="uefi-step_3"></p></li><li><p>选择 <code>UEFI 固件设置</code> 并回车 <code>Enter</code></p><p><img src="'+g+'" alt="uefi-step_4"></p></li><li><p>按下 <code>Enter</code> 重启，此时应该已经进入了 BIOS</p></li></ol><div class="info custom-block"><p class="custom-block-title">🍧 碎碎念</p><p>随着时代的发展，主板的 BIOS 界面也越来越现代；很多主板都有了中文，根据主板 BIOS 界面的提示进行操作吧！</p></div><h2 id="_7-关闭-bios-设置中的-secure-boot" tabindex="-1">7. 关闭 BIOS 设置中的 Secure Boot <a class="header-anchor" href="#_7-关闭-bios-设置中的-secure-boot" aria-hidden="true">#</a></h2><p><img src="'+m+'" alt="uefi-step_5"></p><p>在类似名为 <code>security</code>（安全） 的选项卡中，找到一项名为 <code>Secure Boot</code>（安全启动，名称可能略有差异）的选项，选择 <code>Disable</code> 将其禁用。</p><div class="info custom-block"><p class="custom-block-title">🍧 碎碎念</p><p>有少数奇葩的主板里面，<code>Secure Boot</code> 被设置为开启，却不存在关闭它的选项，但系统主板内置有 Windows 系统的公钥证书签名，使其只能加载 Windows，其它系统（包括 archlinux）一律不予加载。用户不能关闭它，还没法换系统，实在让人无语 😶</p><p>如果你正好是这样的电脑，emmm... 不妨在虚拟机里尝试下 archlinux 吧！</p></div><h2 id="_8-调整启动方式为-uefi-可能不需要" tabindex="-1">8. 调整启动方式为 UEFI（可能不需要） <a class="header-anchor" href="#_8-调整启动方式为-uefi-可能不需要" aria-hidden="true">#</a></h2><p>在某些旧的主板里，需要调整启动模式为 <code>UEFI</code>，而非传统的 <code>BIOS/CSM</code>。在类似名为 <code>boot</code> 的选项卡中，找到类似名为 <code>Boot Mode</code> 的选项，确保将其调整为 <code>UEFI only</code>，而非 <code>legacy/CSM</code>。</p><h2 id="_9-调整硬盘启动顺序" tabindex="-1">9. 调整硬盘启动顺序 <a class="header-anchor" href="#_9-调整硬盘启动顺序" aria-hidden="true">#</a></h2><p><img src="'+k+'" alt="uefi-step_6"></p><p><img src="'+w+'" alt="uefi-step_7"></p><p>在类似名为 <code>boot</code> 的选项卡中，找到类似名为 <code>Boot Options</code>（名称可能略有差异）的设置选项，将优盘的启动顺序调至首位。</p><h2 id="_10-保存-bios-设置" tabindex="-1">10. 保存 BIOS 设置 <a class="header-anchor" href="#_10-保存-bios-设置" aria-hidden="true">#</a></h2><p><img src="'+x+'" alt="uefi-step_8"></p><p>最后保存 BIOS 设置并退出，一般的按键是 <code>F10</code>。</p><h2 id="_11-准备安装" tabindex="-1">11. 准备安装 <a class="header-anchor" href="#_11-准备安装" aria-hidden="true">#</a></h2><p><img src="'+e+'" alt="archlinux-iso_1"></p><p><img src="'+a+'" alt="archlinux-iso_2"></p><p>此时电脑重启，不出意外的话根据提示你应该可以顺利进入 archlinux 的安装界面了（有一头 🐄 牛牛在讲话）。</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>archlinux 安装盘应该一直插在 🖥️ 电脑上</p></div>',61),E=[B];function S(I,O,U,y,A,F){return t(),r("div",null,E)}const G=i(v,[["render",S]]);export{M as __pageData,G as default};
