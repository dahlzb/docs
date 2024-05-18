import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as t,a as e,d as i,b as l,e as n}from"./app-Bnj59xRr.js";const o={},v=n('<h2 id="git服务器安装gogs" tabindex="-1"><a class="header-anchor" href="#git服务器安装gogs"><span>Git服务器安装Gogs</span></a></h2><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h4><blockquote><p>Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 <strong>所有平台</strong>，包括 Linux、Mac OS X、Windows 以及 ARM 平台。 官网：https://gogs.io/ Github：https://github.com/gogits/gogs</p></blockquote><h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h4>',4),u={href:"https://github.com/gogs/gogs/releases",target:"_blank",rel:"noopener noreferrer"},c=n(`<p><code>386</code> 表示32为操作系统</p><p><code>amd64</code> 表示64位操作系统</p><p><code>mws</code> 表示提供内置 Windows 服务支持，如果您使用 NSSM 请使用另外一个版本</p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><ol><li>解压压缩包。</li><li>使用命令 <code>cd</code> 进入到刚刚创建的目录。</li><li>执行命令 <code>./gogs web</code>，然后，就没有然后了。</li></ol><h4 id="默认配置文件" tabindex="-1"><a class="header-anchor" href="#默认配置文件"><span>默认配置文件</span></a></h4><p>默认配置都保存在 <code>conf/app.ini</code> 不允许修改，保证版本升级时不需要重新配置。</p><h4 id="自定义配置文件" tabindex="-1"><a class="header-anchor" href="#自定义配置文件"><span>自定义配置文件</span></a></h4><p>创建 <code>custom/conf/app.ini</code> 就可以了。</p><p>需修改database-PATH路径</p><h4 id="注册windows服务" tabindex="-1"><a class="header-anchor" href="#注册windows服务"><span>注册Windows服务</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sc create gogs start= auto binPath= &quot;\\&quot;D:\\Program Files\\gogs\\gogs.exe\\&quot; web --config \\&quot;D:\\Program Files\\gogs\\custom\\conf\\app.ini\\&quot;&quot;

Net Stop ServiceName : 停止服务
sc delete ServiceName : 删除服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何添加自定义的-gitignore、license和readme" tabindex="-1"><a class="header-anchor" href="#如何添加自定义的-gitignore、license和readme"><span>如何添加自定义的.gitignore、LICENSE和README</span></a></h4>`,13),m=e("ol",null,[e("li",null,"添加 gitignore 文件")],-1),b={href:"https://www.gitignore.io/",target:"_blank",rel:"noopener noreferrer"},h=e("strong",null,".gitignore模板",-1),p=e("code",null,"custom/conf/gitignore/",-1),g=e("code",null,".gitignore",-1),E=n('<ol start="2"><li>添加许可证</li></ol><p>模板目录 <code>custom/conf/license</code> ，使用方法和添加 <code>gitignore</code> 相同。</p><ol start="3"><li>添加自诉文件</li></ol><p>模板目录 <code>custom/conf/readme</code> ，使用方法和添加 <code>gitignore</code> 相同。</p><p>该 <code>README</code> 模板支持四个基本的占位符</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># repo name is: {Name}\n{Description}\nYou can get the development version of this repo via `git clone {CloneURL.SSH}` or `git clone {CloneURL.HTTPS}`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),f=n(`<h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h4><ol><li><p>commit中文或文件中文内容乱码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[repository]
ANSI_CHARSET = GB18030
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Error: RPC failed; HTTP 413 curl 22 The requested URL returned error: 413</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>413：修改nginx配置，最大上传文件大小
client_max_body_size 50m;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Error: RPC failed; HTTP 411 curl 22 The requested URL returned error: 411</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git bash执行一下命令，修改最大上传文件大小最大50M
git config --global http.postBuffer 52428800
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="app-ini-完整配置" tabindex="-1"><a class="header-anchor" href="#app-ini-完整配置"><span>app.ini 完整配置</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># !!! NEVER EVER MODIFY THIS FILE !!!
# !!! PLEASE MAKE CHANGES ON CORRESPONDING CUSTOM CONFIG FILE !!!
# !!! IF YOU ARE PACKAGING PROVIDER, PLEASE MAKE OWN COPY OF IT !!!

; The brand name of the application, can be your company or team name.
BRAND_NAME = Gogs
; The system user who should be running the applications. It has no effect on Windows,
; otherwise, it should match the value of $USER environment variable.
RUN_USER = git
; The running mode of the application, can be either &quot;dev&quot;, &quot;prod&quot; or &quot;test&quot;.
RUN_MODE = dev

[server]
; The public-facing URL for the application.
EXTERNAL_URL = %(PROTOCOL)s://%(DOMAIN)s:%(HTTP_PORT)s/
; The public-facing domain name for the application.
DOMAIN = localhost
; The protocol that is used to serve direct traffic to the application.
; Currently supports &quot;http&quot;, &quot;https&quot;, &quot;fcgi&quot; and &quot;unix&quot;.
PROTOCOL = http
; The address to be listened by the application.
HTTP_ADDR = 0.0.0.0
; The port number to be listened by the application.
HTTP_PORT = 3000
; Generate steps:
; $ ./gogs cert -ca=true -duration=8760h0m0s -host=myhost.example.com
;
; Or from a .pfx file exported from the Windows certificate store (do
; not forget to export the private key):
; $ openssl pkcs12 -in cert.pfx -out cert.pem -nokeys
; $ openssl pkcs12 -in cert.pfx -out key.pem -nocerts -nodes
CERT_FILE = custom/https/cert.pem
KEY_FILE = custom/https/key.pem
; The minimum allowed TLS version, currently supports &quot;TLS10&quot;, &quot;TLS11&quot;, &quot;TLS12&quot;, and &quot;TLS13&quot;.
TLS_MIN_VERSION = TLS12
; File permission when serve traffic via Unix domain socket.
UNIX_SOCKET_PERMISSION = 666
; Local (DMZ) URL for workers (e.g. SSH update) accessing web service.
; In most cases you do not need to change the default value.
; Alter it only if your SSH server node is not the same as HTTP node.
LOCAL_ROOT_URL = %(PROTOCOL)s://%(HTTP_ADDR)s:%(HTTP_PORT)s/

; Whether to disable using CDN for static files regardless.
OFFLINE_MODE = false
; Whether to disable logging in router.
DISABLE_ROUTER_LOG = true
; Whether to enable application level GZIP compression.
ENABLE_GZIP = false

; The path for storing application specific data.
APP_DATA_PATH = data
; Whether to enable to load assets (i.e. &quot;conf&quot;, &quot;templates&quot;, &quot;public&quot;) from disk instead of embedded bindata.
LOAD_ASSETS_FROM_DISK = false

; The landing page URL for anonymous users, the value should not include
; subpath that is handled by the reverse proxy.
LANDING_URL = /

; Whether to disable SSH access to the application entirely.
; 是否完全禁用对应用程序的SSH访问。
DISABLE_SSH = false
; The domain name to be exposed in SSH clone URL.
; SSH克隆URL中要公开的域名，默认为 %(DOMAIN)s
SSH_DOMAIN = git
; The port number to be exposed in SSH clone URL.
; SSH克隆URL中的端口号.
SSH_PORT = 22
; The path of SSH root directory, default is &quot;$HOME/.ssh&quot;.
; SSH根目录的路径，默认为&quot;$HOME/.ssh&quot;
SSH_ROOT_PATH =
; The path to ssh-keygen, default is &quot;ssh-keygen&quot; and let shell find out which one to call.
; ssh-keygen的路径，默认为 &quot;ssh-keygen&quot;，并让shell找出要调用的那个。
SSH_KEYGEN_PATH = ssh-keygen
; The directory to create temporary files when test a public key using ssh-keygen,
; default is the system temporary directory.
SSH_KEY_TEST_PATH =
; Whether to check minimum public key size with corresponding type.
MINIMUM_KEY_SIZE_CHECK = false
; Whether to rewrite &quot;~/.ssh/authorized_keys&quot; file at start, ignored when use builtin SSH server.
REWRITE_AUTHORIZED_KEYS_AT_START = false
; Whether to start a builtin SSH server.
START_SSH_SERVER = false
; The network interface for builtin SSH server to listen on.
SSH_LISTEN_HOST = 0.0.0.0
; The port number for builtin SSH server to listen on.
SSH_LISTEN_PORT = %(SSH_PORT)s
; The list of accepted ciphers for connections to builtin SSH server.
SSH_SERVER_CIPHERS = aes128-ctr, aes192-ctr, aes256-ctr, aes128-gcm@openssh.com, arcfour256, arcfour128

; Define allowed algorithms and their minimum key length (use -1 to disable a type).
[ssh.minimum_key_sizes]
ED25519 = 256
ECDSA   = 256
RSA     = 2048
DSA     = 1024

[repository]
; The root path for storing managed repositories, default is &quot;~/gogs-repositories&quot;
ROOT =
; The script type server supports, sometimes could be &quot;sh&quot;.
SCRIPT_TYPE = bash
; Default ANSI charset for an unrecognized charset.
ANSI_CHARSET =
; Whether to force every new repository to be private.
FORCE_PRIVATE = false
; The global limit of number of repositories a user can create, -1 means no limit.
MAX_CREATION_LIMIT = -1
; Preferred Licenses to place at the top of the list.
; Name must match file name in &quot;conf/license&quot; or &quot;custom/conf/license&quot;.
PREFERRED_LICENSES = Apache License 2.0, MIT License
; Whether to disable Git interaction with repositories via HTTP/HTTPS protocol.
DISABLE_HTTP_GIT = false
; Whether to enable ability to migrate repository by server local path.
ENABLE_LOCAL_PATH_MIGRATION = false
; Whether to enable render mode for raw file. There are potential security risks.
ENABLE_RAW_FILE_RENDER_MODE = false
; The maximum number of goroutines that can be run at the same time for a single
; fetch request. Usually, the value depend of how many CPU (cores) you have. If
; the value is non-positive, it matchs the number of CPUs available to the application.
COMMITS_FETCH_CONCURRENCY = 0

[repository.editor]
; List of file extensions that should have line wraps in the CodeMirror editor.
; Separate extensions with a comma.
LINE_WRAP_EXTENSIONS = .txt,.md,.markdown,.mdown,.mkd
; Valid file modes that have a preview API associated with them, such as &quot;/api/v1/markdown&quot;.
; Separate values by commas. Preview tab in edit mode won&#39;t show if the file extension doesn&#39;t match.
PREVIEWABLE_FILE_MODES = markdown

[repository.upload]
; 是否启用存储库文件上传。
ENABLED = true
; 临时存储上传内容的路径（该路径下的内容在每次启动时都会被清除）。
TEMP_PATH = data/tmp/uploads
; 允许上传的文件类型, 例如 &quot;image/jpeg|image/png&quot;， 保留为空以允许任何文件类型。
ALLOWED_TYPES =
; 每个文件的最大大小（MB）
FILE_MAX_SIZE = 3
; 每次上传的最大文件数。
MAX_FILES = 5

[database]
; The database backend, either &quot;postgres&quot;, &quot;mysql&quot; &quot;sqlite3&quot; or &quot;mssql&quot;.
; You can connect to TiDB with MySQL protocol.
TYPE = postgres
HOST = 127.0.0.1:5432
NAME = gogs
USER = gogs
PASSWORD =
; For &quot;postgres&quot; only, either &quot;disable&quot;, &quot;require&quot; or &quot;verify-full&quot;.
SSL_MODE = disable
; For &quot;sqlite3&quot; only, make sure to use absolute path.
PATH = data/gogs.db
; The maximum open connections of the pool.
MAX_OPEN_CONNS = 30
; The maximum idle connections of the pool.
MAX_IDLE_CONNS = 30

[security]
; Whether to show the install page, set this to &quot;true&quot; to bypass it.
INSTALL_LOCK = false
; The secret to encrypt cookie values, 2FA code, etc.
; !!CHANGE THIS TO KEEP YOUR USER DATA SAFE!!
SECRET_KEY = !#@FDEWREWR&amp;*(
; The days remembered for auto-login.
LOGIN_REMEMBER_DAYS = 7
; The cookie name to stoed auto-login information.
COOKIE_REMEMBER_NAME = gogs_incredible
; The cookie name to stored logged in username.
COOKIE_USERNAME = gogs_awesome
; Whether to set secure cookie.
COOKIE_SECURE = false
; Whether to set cookie to indicate user login status.
ENABLE_LOGIN_STATUS_COOKIE = false
; The cookie name to store user login status.
LOGIN_STATUS_COOKIE_NAME = login_status

[email]
; Whether to enable the email service.
ENABLED = false
; The prefix prepended to the subject line.
SUBJECT_PREFIX = \`[%(BRAND_NAME)s] \`
; The SMTP server with its port, e.g. smtp.mailgun.org:587, smtp.gmail.com:587, smtp.qq.com:465
; If the port ends is &quot;465&quot;, SMTPS will be used. Using STARTTLS on port 587 is recommended per RFC 6409.
; If the server supports STARTTLS it will always be used.
HOST = smtp.mailgun.org:587
; The email from address (RFC 5322). This can be just an email address, or the \`&quot;Name&quot; &lt;email@example.com&gt;\` format.
FROM = noreply@gogs.localhost
; The login user.
USER = noreply@gogs.localhost
; The login password.
PASSWORD =

; Whether to disable HELO operation when the hostname is different.
DISABLE_HELO =
; The custom hostname for HELO operation, default is from system.
HELO_HOSTNAME =

; Whether to skip verifying the certificate of the server. Only use this for self-signed certificates.
SKIP_VERIFY = false
; Whether to use client certificates.
USE_CERTIFICATE = false
CERT_FILE = custom/email/cert.pem
KEY_FILE = custom/email/key.pem

; Whether to use &quot;text/plain&quot; as content format.
USE_PLAIN_TEXT = false
; Whether to attach a plaintext alternative to the MIME message while sending HTML emails.
; It is used to support older mail clients and make spam filters happier.
ADD_PLAIN_TEXT_ALT = false

[auth]
; The valid duration of activate code in minutes.
ACTIVATE_CODE_LIVES = 180
; The valid duration of reset password code in minutes.
RESET_PASSWORD_CODE_LIVES = 180
; Whether to require email confirmation for adding new email addresses.
; Enable this option will also require user to confirm the email for registration.
REQUIRE_EMAIL_CONFIRMATION = false
; Whether to disallow anonymous users visiting the site.
REQUIRE_SIGNIN_VIEW = false
; Whether to disable self-registration. When disabled, accounts would have to be created by admins.
DISABLE_REGISTRATION = false
; Whether to enable captcha validation for registration
ENABLE_REGISTRATION_CAPTCHA = true

; Whether to enable reverse proxy authentication via HTTP header.
ENABLE_REVERSE_PROXY_AUTHENTICATION = false
; Whether to automatically create new users for reverse proxy authentication.
ENABLE_REVERSE_PROXY_AUTO_REGISTRATION = false
; The HTTP header used as username for reverse proxy authentication.
REVERSE_PROXY_AUTHENTICATION_HEADER = X-WEBAUTH-USER

[user]
; Whether to enable email notifications for users.
ENABLE_EMAIL_NOTIFICATION = false

[session]
; The session provider, either &quot;memory&quot;, &quot;file&quot;, or &quot;redis&quot;.
PROVIDER = memory
; The configuration for respective provider:
; - memory: does not need any config yet
; - file: session file path, e.g. \`data/sessions\`
; - redis: network=tcp,addr=:6379,password=macaron,db=0,pool_size=100,idle_timeout=180
PROVIDER_CONFIG = data/sessions
; The cookie name to store the session identifier.
COOKIE_NAME = i_like_gogs
; Whether to set cookie in HTTPS only.
COOKIE_SECURE = false
; The GC interval in seconds for session data.
GC_INTERVAL = 3600
; The maximum life time in seconds for a session.
MAX_LIFE_TIME = 86400
; The cookie name for CSRF token.
CSRF_COOKIE_NAME = _csrf

[cache]
; The cache adapter, either &quot;memory&quot;, &quot;redis&quot;, or &quot;memcache&quot;.
ADAPTER = memory
; For &quot;memory&quot; only, GC interval in seconds.
INTERVAL = 60
; For &quot;redis&quot; and &quot;memcache&quot;, connection host address:
; - redis: network=tcp,addr=:6379,password=macaron,db=0,pool_size=100,idle_timeout=180
; - memcache: \`127.0.0.1:11211\`
HOST =

[http]
; The value for &quot;Access-Control-Allow-Origin&quot; header, default is not to present.
ACCESS_CONTROL_ALLOW_ORIGIN =

[lfs]
; The storage backend for uploading new objects.
STORAGE = local
; The root path to store LFS objects on local file system.
OBJECTS_PATH = data/lfs-objects

[attachment]
; Whether to enabled upload attachments in general.
ENABLED = true
; The path to store attachments on the file system.
PATH = data/attachments
; File types that are allowed to be uploaded, e.g. &quot;image/jpeg|image/png&quot;. Leave empty to allow any file type.
ALLOWED_TYPES = image/jpeg|image/png
; The maximum size of each file in MB.
MAX_SIZE = 4
; The maximum number of files per upload.
MAX_FILES = 5

[release.attachment]
; Whether to enabled upload attachments for releases.
ENABLED = true
; File types that are allowed to be uploaded, e.g. &quot;image/jpeg|image/png&quot;. Leave empty to allow any file type.
ALLOWED_TYPES = */*
; The maximum size of each file in MB.
MAX_SIZE = 32
; The maximum number of files per upload.
MAX_FILES = 10

[time]
; Specifies the format for fully outputed dates.
; Values should be one of the following:
; ANSIC, UnixDate, RubyDate, RFC822, RFC822Z, RFC850, RFC1123, RFC1123Z, RFC3339, RFC3339Nano, Kitchen, Stamp, StampMilli, StampMicro and StampNano.
; For more information about the format see http://golang.org/pkg/time/#pkg-constants.
FORMAT = RFC1123

[picture]
; The path to store user avatars on the file system.
AVATAR_UPLOAD_PATH = data/avatars
; The path to store repository avatars on the file system.
REPOSITORY_AVATAR_UPLOAD_PATH = data/repo-avatars
; Chinese users can use a custom avatar source, such as http://cn.gravatar.com/avatar/.
GRAVATAR_SOURCE = gravatar
; Whether to disable Gravatar, this value will be forced to be true in offline mode.
DISABLE_GRAVATAR = false
; Whether to enable federated avatar lookup uses DNS to discover avatar associated
; with emails, see https://www.libravatar.org for details.
; This value will be forced to be false in offline mode or when Gravatar is disbaled.
ENABLE_FEDERATED_AVATAR = false

[markdown]
; Whether to enable hard line break extension.
ENABLE_HARD_LINE_BREAK = false
; The list of custom URL schemes that are allowed as links when rendering Markdown.
; For example, &quot;git&quot; (for &quot;git://&quot;) and &quot;magnet&quot; (for &quot;magnet://&quot;).
CUSTOM_URL_SCHEMES =
; The list of file extensions that should be rendered/edited as Markdown.
; Separate extensions with a comma. To render files with no extension as markdown, just put a comma.
FILE_EXTENSIONS = .md,.markdown,.mdown,.mkd

[smartypants]
; Whether to enable the Smartypants extension.
ENABLED = false
FRACTIONS = true
DASHES = true
LATEX_DASHES = true
ANGLED_QUOTES = true

[admin]
; Whether to disable regular (non-admin) users to create organizations.
DISABLE_REGULAR_ORG_CREATION = false

[webhook]
; The list of enabled types for users to use, can be &quot;gogs&quot;, &quot;slack&quot;, &quot;discord&quot;, &quot;dingtalk&quot;.
TYPES = gogs, slack, discord, dingtalk
; Deliver timeout in seconds.
DELIVER_TIMEOUT = 15
; Whether to allow insecure certification.
SKIP_TLS_VERIFY = false
; The number of history information in each page.
PAGING_NUM = 10

; General settings of loggers.
[log]
; The root path for all log files, default is &quot;log/&quot; subdirectory.
ROOT_PATH =
; Can be &quot;console&quot;, &quot;file&quot;, &quot;slack&quot; and &quot;discord&quot;.
; Use comma to separate multiple modes, e.g. &quot;console, file&quot;
MODE = console
; Buffer length of channel, keep it as it is if you don&#39;t know what it is.
BUFFER_LEN = 100
; Either &quot;Trace&quot;, &quot;Info&quot;, &quot;Warn&quot;, &quot;Error&quot;, &quot;Fatal&quot;, default is &quot;Trace&quot;
LEVEL = Trace

; For &quot;console&quot; mode only
[log.console]
; Comment out to inherit
; LEVEL =

; For &quot;file&quot; mode only
[log.file]
; Comment out to inherit
; LEVEL =
; Whether to enable automated log rotate (switch of following options).
LOG_ROTATE = true
; Whether to segment log files daily.
DAILY_ROTATE = true
; The maximum size shift of single file, default is 28 means 1 &lt;&lt; 28 = 256MB.
MAX_SIZE_SHIFT = 28
; The maximum number of lines of single file.
MAX_LINES = 1000000
; The expired days of log file (delete after max days).
MAX_DAYS = 7

; For &quot;slack&quot; mode only
[log.slack]
; Comment out to inherit
; LEVEL =
; Webhook URL
URL =

[log.discord]
; Comment out to inherit
; LEVEL =
; Webhook URL
URL =
; The username to be displayed in notification.
USERNAME = %(BRAND_NAME)s

[log.xorm]
; Enable file rotation
ROTATE = true
; Rotate every day
ROTATE_DAILY = true
; Rotate once file size excesses x MB
MAX_SIZE = 100
; Maximum days to keep logger files
MAX_DAYS = 3

[log.gorm]
; Whether to enable file rotation.
ROTATE = true
; Whether to rotate file every day.
ROTATE_DAILY = true
; The maximum file size in MB before next rotate.
MAX_SIZE = 100
; The maximum days to keep files.
MAX_DAYS = 3

[cron]
; Enable running cron tasks periodically.
ENABLED = true
; Run cron tasks when Gogs starts.
RUN_AT_START = false

[cron.update_mirrors]
; Defines how often the mirror syncer checks if any mirror needs to be synchronized (based on the mirror update interval).
SCHEDULE = @every 10m

; Repository health check
[cron.repo_health_check]
SCHEDULE = @every 24h
TIMEOUT = 60s
; Arguments for command &#39;git fsck&#39;, e.g. &quot;--unreachable --tags&quot;
; see more on http://git-scm.com/docs/git-fsck/1.7.5
ARGS =

; Check repository statistics
[cron.check_repo_stats]
RUN_AT_START = true
SCHEDULE = @every 24h

; Cleanup repository archives
[cron.repo_archive_cleanup]
RUN_AT_START = false
SCHEDULE = @every 24h
; Time duration to check if archive should be cleaned
OLDER_THAN = 24h

[git]
; Disables highlight of added and removed changes
DISABLE_DIFF_HIGHLIGHT = false
; Max number of files shown in diff view
MAX_GIT_DIFF_FILES = 100
; Max number of lines allowed of a single file in diff view
MAX_GIT_DIFF_LINES = 1000
; Max number of characters of a line allowed in diff view
MAX_GIT_DIFF_LINE_CHARACTERS = 2000
; Arguments for command &#39;git gc&#39;, e.g. &quot;--aggressive --auto&quot;
; see more on http://git-scm.com/docs/git-gc/1.7.5
GC_ARGS =

; Operation timeout in seconds
[git.timeout]
MIGRATE = 600
MIRROR = 300
CLONE = 300
PULL = 300
GC = 60

[mirror]
; Defines the default interval (in hours) until the next sync for a mirror (after a successful mirror sync).
; It can be overridden individually for each mirror repository in the settings.
DEFAULT_INTERVAL = 8

[api]
; Max number of items will response in a page
MAX_RESPONSE_ITEMS = 50

[ui]
; Number of repositories that are showed in one explore page
EXPLORE_PAGING_NUM = 20
; Number of issues that are showed in one page
ISSUE_PAGING_NUM = 10
; Number of maximum commits showed in one activity feed
FEED_MAX_COMMIT_NUM = 5
; Value of &quot;theme-color&quot; meta tag, used by Android &gt;= 5.0
; An invalid color like &quot;none&quot; or &quot;disable&quot; will have the default style
; More info: https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android
THEME_COLOR_META_TAG = \`#ff5343\`
; Max size in bytes of files to be displayed (default is 8MB)
MAX_DISPLAY_FILE_SIZE = 8388608

[ui.admin]
; Number of users that are showed in one page
USER_PAGING_NUM = 50
; Number of repos that are showed in one page
REPO_PAGING_NUM = 50
; Number of notices that are showed in one page
NOTICE_PAGING_NUM = 25
; Number of organization that are showed in one page
ORG_PAGING_NUM = 50

[ui.user]
; Number of repos that are showed in one page
REPO_PAGING_NUM = 15
; Number of news feeds that are showed in one page
NEWS_FEED_PAGING_NUM = 20
; Number of commits that are showed in one page
COMMITS_PAGING_NUM = 30

[prometheus]
; Whether to enable Prometheus metrics.
ENABLED = true
; Whether to enable HTTP Basic Authentication to protect metrics data.
ENABLE_BASIC_AUTH = false
; The username for HTTP Basic Authentication.
BASIC_AUTH_USERNAME =
; The password for HTTP Basic Authentication.
BASIC_AUTH_PASSWORD =

; Extension mapping to highlight class
; e.g. .toml=ini
[highlight.mapping]

[i18n]
LANGS = en-US,zh-CN,zh-HK,zh-TW,de-DE,fr-FR,nl-NL,lv-LV,ru-RU,ja-JP,es-ES,pt-BR,pl-PL,bg-BG,it-IT,fi-FI,tr-TR,cs-CZ,sr-SP,sv-SE,ko-KR,gl-ES,uk-UA,en-GB,hu-HU,sk-SK,id-ID,fa-IR,vi-VN,pt-PT
NAMES = English,简体中文,繁體中文（香港）,繁體中文（臺灣）,Deutsch,français,Nederlands,latviešu,русский,日本語,español,português do Brasil,polski,български,italiano,suomi,Türkçe,čeština,српски,svenska,한국어,galego,українська,English (United Kingdom),Magyar,Slovenčina,Indonesian,Persian,Vietnamese,Português

; Used for datetimepicker
[i18n.datelang]
en-US = en
zh-CN = zh
zh-HK = zh-TW
zh-TW = zh-TW
de-DE = de
fr-FR = fr
nl-NL = nl
lv-LV = lv
ru-RU = ru
ja-JP = ja
es-ES = es
pt-BR = pt-BR
pl-PL = pl
bg-BG = bg
it-IT = it
fi-FI = fi
tr-TR = tr
cs-CZ = cs-CZ
sr-SP = sr
sv-SE = sv
ko-KR = ko
gl-ES = gl
uk-UA = uk
en-GB = en-GB
hu-HU = hu
sk-SK = sk
id-ID = id
fa-IR = fa
vi-VN = vi
pt-PT = pt

[other]
SHOW_FOOTER_BRANDING = false
; Show time of template execution in the footer
SHOW_FOOTER_TEMPLATE_LOAD_TIME = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a</p>`,5);function T(_,A){const s=a("ExternalLinkIcon");return r(),t("div",null,[v,e("p",null,[e("a",u,[i("下载地址："),l(s)]),i(" https://github.com/gogs/gogs/releases")]),c,e("blockquote",null,[m,e("p",null,[i("从 "),e("a",b,[i("www.gitignore.io"),l(s)]),i(" 下载需要的 "),h,i("，然后将模板文件移动到 "),p,i(" 并重启Gogs，然后您应该能够在创建项目时，在 "),g,i(" 模板列表中看到了。")]),E]),f])}const I=d(o,[["render",T],["__file","Git服务器安装Gogs.html.vue"]]),L=JSON.parse('{"path":"/devops/git/Git%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85Gogs.html","title":"Git服务器安装Gogs","lang":"zh-CN","frontmatter":{"title":"Git服务器安装Gogs","date":"2024-04-12T17:07:05.000Z","description":"Git服务器安装Gogs 简介 Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 所有平台，包括 Linux、Mac OS X、Windows 以及 ARM 平台。 官网：https://gogs.io/ Github：https://...","head":[["meta",{"property":"og:url","content":"https://dahlzb.github.io/docs/devops/git/Git%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85Gogs.html"}],["meta",{"property":"og:site_name","content":"DahlZb小站"}],["meta",{"property":"og:title","content":"Git服务器安装Gogs"}],["meta",{"property":"og:description","content":"Git服务器安装Gogs 简介 Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 所有平台，包括 Linux、Mac OS X、Windows 以及 ARM 平台。 官网：https://gogs.io/ Github：https://..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-22T11:57:08.000Z"}],["meta",{"property":"article:author","content":"DahlZb"}],["meta",{"property":"article:published_time","content":"2024-04-12T17:07:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-22T11:57:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git服务器安装Gogs\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-12T17:07:05.000Z\\",\\"dateModified\\":\\"2024-04-22T11:57:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DahlZb\\",\\"url\\":\\"https://github.com/dahlzb\\"}]}"]]},"headers":[{"level":2,"title":"Git服务器安装Gogs","slug":"git服务器安装gogs","link":"#git服务器安装gogs","children":[]}],"git":{"createdTime":1713787028000,"updatedTime":1713787028000,"contributors":[{"name":"dahlzb","email":"1304187196@qq.com","commits":1}]},"readingTime":{"minutes":11.41,"words":3422},"filePathRelative":"devops/git/Git服务器安装Gogs.md","localizedDate":"2024年4月12日","excerpt":"<h2>Git服务器安装Gogs</h2>\\n<h4>简介</h4>\\n<blockquote>\\n<p>Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 <strong>所有平台</strong>，包括 Linux、Mac OS X、Windows 以及 ARM 平台。\\n官网：https://gogs.io/\\nGithub：https://github.com/gogits/gogs</p>\\n</blockquote>\\n<h4>下载</h4>\\n<p><a href=\\"https://github.com/gogs/gogs/releases\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下载地址：</a> https://github.com/gogs/gogs/releases</p>","autoDesc":true}');export{I as comp,L as data};
