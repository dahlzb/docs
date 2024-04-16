(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{366:function(e,n,t){"use strict";t.r(n);var o=t(8),a=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"git服务器安装gogs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git服务器安装gogs"}},[e._v("#")]),e._v(" Git服务器安装Gogs")]),e._v(" "),n("h4",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),n("blockquote",[n("p",[e._v("Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 "),n("strong",[e._v("所有平台")]),e._v("，包括 Linux、Mac OS X、Windows 以及 ARM 平台。\n官网：https://gogs.io/\nGithub：https://github.com/gogits/gogs")])]),e._v(" "),n("h4",{attrs:{id:"下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[e._v("#")]),e._v(" 下载")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/gogs/gogs/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址："),n("OutboundLink")],1),e._v(" https://github.com/gogs/gogs/releases")]),e._v(" "),n("p",[n("code",[e._v("386")]),e._v(" 表示32为操作系统")]),e._v(" "),n("p",[n("code",[e._v("amd64")]),e._v(" 表示64位操作系统")]),e._v(" "),n("p",[n("code",[e._v("mws")]),e._v(" 表示提供内置 Windows 服务支持，如果您使用 NSSM 请使用另外一个版本")]),e._v(" "),n("h4",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),n("ol",[n("li",[e._v("解压压缩包。")]),e._v(" "),n("li",[e._v("使用命令 "),n("code",[e._v("cd")]),e._v(" 进入到刚刚创建的目录。")]),e._v(" "),n("li",[e._v("执行命令 "),n("code",[e._v("./gogs web")]),e._v("，然后，就没有然后了。")])]),e._v(" "),n("h4",{attrs:{id:"默认配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认配置文件"}},[e._v("#")]),e._v(" 默认配置文件")]),e._v(" "),n("p",[e._v("默认配置都保存在 "),n("code",[e._v("conf/app.ini")]),e._v(" 不允许修改，保证版本升级时不需要重新配置。")]),e._v(" "),n("h4",{attrs:{id:"自定义配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置文件"}},[e._v("#")]),e._v(" 自定义配置文件")]),e._v(" "),n("p",[e._v("创建 "),n("code",[e._v("custom/conf/app.ini")]),e._v(" 就可以了。")]),e._v(" "),n("p",[e._v("需修改database-PATH路径")]),e._v(" "),n("h4",{attrs:{id:"注册windows服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册windows服务"}},[e._v("#")]),e._v(" 注册Windows服务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('sc create gogs start= auto binPath= "\\"D:\\Program Files\\gogs\\gogs.exe\\" web --config \\"D:\\Program Files\\gogs\\custom\\conf\\app.ini\\""\n\nNet Stop ServiceName : 停止服务\nsc delete ServiceName : 删除服务\n')])])]),n("h4",{attrs:{id:"如何添加自定义的-gitignore、license和readme"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何添加自定义的-gitignore、license和readme"}},[e._v("#")]),e._v(" 如何添加自定义的.gitignore、LICENSE和README")]),e._v(" "),n("blockquote",[n("ol",[n("li",[e._v("添加 gitignore 文件")])]),e._v(" "),n("p",[e._v("从 "),n("a",{attrs:{href:"https://www.gitignore.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.gitignore.io"),n("OutboundLink")],1),e._v(" 下载需要的 "),n("strong",[e._v(".gitignore模板")]),e._v("，然后将模板文件移动到 "),n("code",[e._v("custom/conf/gitignore/")]),e._v(" 并重启Gogs，然后您应该能够在创建项目时，在 "),n("code",[e._v(".gitignore")]),e._v(" 模板列表中看到了。")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("添加许可证")])]),e._v(" "),n("p",[e._v("模板目录 "),n("code",[e._v("custom/conf/license")]),e._v(" ，使用方法和添加 "),n("code",[e._v("gitignore")]),e._v(" 相同。")]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("添加自诉文件")])]),e._v(" "),n("p",[e._v("模板目录 "),n("code",[e._v("custom/conf/readme")]),e._v(" ，使用方法和添加 "),n("code",[e._v("gitignore")]),e._v(" 相同。")]),e._v(" "),n("p",[e._v("该 "),n("code",[e._v("README")]),e._v(" 模板支持四个基本的占位符")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# repo name is: {Name}\n{Description}\nYou can get the development version of this repo via `git clone {CloneURL.SSH}` or `git clone {CloneURL.HTTPS}`\n")])])])]),e._v(" "),n("h4",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("commit中文或文件中文内容乱码")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[repository]\nANSI_CHARSET = GB18030\n")])])])]),e._v(" "),n("li",[n("p",[e._v("Error: RPC failed; HTTP 413 curl 22 The requested URL returned error: 413")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("413：修改nginx配置，最大上传文件大小\nclient_max_body_size 50m;\n")])])])]),e._v(" "),n("li",[n("p",[e._v("Error: RPC failed; HTTP 411 curl 22 The requested URL returned error: 411")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git bash执行一下命令，修改最大上传文件大小最大50M\ngit config --global http.postBuffer 52428800\n")])])])])]),e._v(" "),n("h4",{attrs:{id:"app-ini-完整配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-ini-完整配置"}},[e._v("#")]),e._v(" app.ini 完整配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# !!! NEVER EVER MODIFY THIS FILE !!!\n# !!! PLEASE MAKE CHANGES ON CORRESPONDING CUSTOM CONFIG FILE !!!\n# !!! IF YOU ARE PACKAGING PROVIDER, PLEASE MAKE OWN COPY OF IT !!!\n\n; The brand name of the application, can be your company or team name.\nBRAND_NAME = Gogs\n; The system user who should be running the applications. It has no effect on Windows,\n; otherwise, it should match the value of $USER environment variable.\nRUN_USER = git\n; The running mode of the application, can be either "dev", "prod" or "test".\nRUN_MODE = dev\n\n[server]\n; The public-facing URL for the application.\nEXTERNAL_URL = %(PROTOCOL)s://%(DOMAIN)s:%(HTTP_PORT)s/\n; The public-facing domain name for the application.\nDOMAIN = localhost\n; The protocol that is used to serve direct traffic to the application.\n; Currently supports "http", "https", "fcgi" and "unix".\nPROTOCOL = http\n; The address to be listened by the application.\nHTTP_ADDR = 0.0.0.0\n; The port number to be listened by the application.\nHTTP_PORT = 3000\n; Generate steps:\n; $ ./gogs cert -ca=true -duration=8760h0m0s -host=myhost.example.com\n;\n; Or from a .pfx file exported from the Windows certificate store (do\n; not forget to export the private key):\n; $ openssl pkcs12 -in cert.pfx -out cert.pem -nokeys\n; $ openssl pkcs12 -in cert.pfx -out key.pem -nocerts -nodes\nCERT_FILE = custom/https/cert.pem\nKEY_FILE = custom/https/key.pem\n; The minimum allowed TLS version, currently supports "TLS10", "TLS11", "TLS12", and "TLS13".\nTLS_MIN_VERSION = TLS12\n; File permission when serve traffic via Unix domain socket.\nUNIX_SOCKET_PERMISSION = 666\n; Local (DMZ) URL for workers (e.g. SSH update) accessing web service.\n; In most cases you do not need to change the default value.\n; Alter it only if your SSH server node is not the same as HTTP node.\nLOCAL_ROOT_URL = %(PROTOCOL)s://%(HTTP_ADDR)s:%(HTTP_PORT)s/\n\n; Whether to disable using CDN for static files regardless.\nOFFLINE_MODE = false\n; Whether to disable logging in router.\nDISABLE_ROUTER_LOG = true\n; Whether to enable application level GZIP compression.\nENABLE_GZIP = false\n\n; The path for storing application specific data.\nAPP_DATA_PATH = data\n; Whether to enable to load assets (i.e. "conf", "templates", "public") from disk instead of embedded bindata.\nLOAD_ASSETS_FROM_DISK = false\n\n; The landing page URL for anonymous users, the value should not include\n; subpath that is handled by the reverse proxy.\nLANDING_URL = /\n\n; Whether to disable SSH access to the application entirely.\n; 是否完全禁用对应用程序的SSH访问。\nDISABLE_SSH = false\n; The domain name to be exposed in SSH clone URL.\n; SSH克隆URL中要公开的域名，默认为 %(DOMAIN)s\nSSH_DOMAIN = git\n; The port number to be exposed in SSH clone URL.\n; SSH克隆URL中的端口号.\nSSH_PORT = 22\n; The path of SSH root directory, default is "$HOME/.ssh".\n; SSH根目录的路径，默认为"$HOME/.ssh"\nSSH_ROOT_PATH =\n; The path to ssh-keygen, default is "ssh-keygen" and let shell find out which one to call.\n; ssh-keygen的路径，默认为 "ssh-keygen"，并让shell找出要调用的那个。\nSSH_KEYGEN_PATH = ssh-keygen\n; The directory to create temporary files when test a public key using ssh-keygen,\n; default is the system temporary directory.\nSSH_KEY_TEST_PATH =\n; Whether to check minimum public key size with corresponding type.\nMINIMUM_KEY_SIZE_CHECK = false\n; Whether to rewrite "~/.ssh/authorized_keys" file at start, ignored when use builtin SSH server.\nREWRITE_AUTHORIZED_KEYS_AT_START = false\n; Whether to start a builtin SSH server.\nSTART_SSH_SERVER = false\n; The network interface for builtin SSH server to listen on.\nSSH_LISTEN_HOST = 0.0.0.0\n; The port number for builtin SSH server to listen on.\nSSH_LISTEN_PORT = %(SSH_PORT)s\n; The list of accepted ciphers for connections to builtin SSH server.\nSSH_SERVER_CIPHERS = aes128-ctr, aes192-ctr, aes256-ctr, aes128-gcm@openssh.com, arcfour256, arcfour128\n\n; Define allowed algorithms and their minimum key length (use -1 to disable a type).\n[ssh.minimum_key_sizes]\nED25519 = 256\nECDSA   = 256\nRSA     = 2048\nDSA     = 1024\n\n[repository]\n; The root path for storing managed repositories, default is "~/gogs-repositories"\nROOT =\n; The script type server supports, sometimes could be "sh".\nSCRIPT_TYPE = bash\n; Default ANSI charset for an unrecognized charset.\nANSI_CHARSET =\n; Whether to force every new repository to be private.\nFORCE_PRIVATE = false\n; The global limit of number of repositories a user can create, -1 means no limit.\nMAX_CREATION_LIMIT = -1\n; Preferred Licenses to place at the top of the list.\n; Name must match file name in "conf/license" or "custom/conf/license".\nPREFERRED_LICENSES = Apache License 2.0, MIT License\n; Whether to disable Git interaction with repositories via HTTP/HTTPS protocol.\nDISABLE_HTTP_GIT = false\n; Whether to enable ability to migrate repository by server local path.\nENABLE_LOCAL_PATH_MIGRATION = false\n; Whether to enable render mode for raw file. There are potential security risks.\nENABLE_RAW_FILE_RENDER_MODE = false\n; The maximum number of goroutines that can be run at the same time for a single\n; fetch request. Usually, the value depend of how many CPU (cores) you have. If\n; the value is non-positive, it matchs the number of CPUs available to the application.\nCOMMITS_FETCH_CONCURRENCY = 0\n\n[repository.editor]\n; List of file extensions that should have line wraps in the CodeMirror editor.\n; Separate extensions with a comma.\nLINE_WRAP_EXTENSIONS = .txt,.md,.markdown,.mdown,.mkd\n; Valid file modes that have a preview API associated with them, such as "/api/v1/markdown".\n; Separate values by commas. Preview tab in edit mode won\'t show if the file extension doesn\'t match.\nPREVIEWABLE_FILE_MODES = markdown\n\n[repository.upload]\n; 是否启用存储库文件上传。\nENABLED = true\n; 临时存储上传内容的路径（该路径下的内容在每次启动时都会被清除）。\nTEMP_PATH = data/tmp/uploads\n; 允许上传的文件类型, 例如 "image/jpeg|image/png"， 保留为空以允许任何文件类型。\nALLOWED_TYPES =\n; 每个文件的最大大小（MB）\nFILE_MAX_SIZE = 3\n; 每次上传的最大文件数。\nMAX_FILES = 5\n\n[database]\n; The database backend, either "postgres", "mysql" "sqlite3" or "mssql".\n; You can connect to TiDB with MySQL protocol.\nTYPE = postgres\nHOST = 127.0.0.1:5432\nNAME = gogs\nUSER = gogs\nPASSWORD =\n; For "postgres" only, either "disable", "require" or "verify-full".\nSSL_MODE = disable\n; For "sqlite3" only, make sure to use absolute path.\nPATH = data/gogs.db\n; The maximum open connections of the pool.\nMAX_OPEN_CONNS = 30\n; The maximum idle connections of the pool.\nMAX_IDLE_CONNS = 30\n\n[security]\n; Whether to show the install page, set this to "true" to bypass it.\nINSTALL_LOCK = false\n; The secret to encrypt cookie values, 2FA code, etc.\n; !!CHANGE THIS TO KEEP YOUR USER DATA SAFE!!\nSECRET_KEY = !#@FDEWREWR&*(\n; The days remembered for auto-login.\nLOGIN_REMEMBER_DAYS = 7\n; The cookie name to stoed auto-login information.\nCOOKIE_REMEMBER_NAME = gogs_incredible\n; The cookie name to stored logged in username.\nCOOKIE_USERNAME = gogs_awesome\n; Whether to set secure cookie.\nCOOKIE_SECURE = false\n; Whether to set cookie to indicate user login status.\nENABLE_LOGIN_STATUS_COOKIE = false\n; The cookie name to store user login status.\nLOGIN_STATUS_COOKIE_NAME = login_status\n\n[email]\n; Whether to enable the email service.\nENABLED = false\n; The prefix prepended to the subject line.\nSUBJECT_PREFIX = `[%(BRAND_NAME)s] `\n; The SMTP server with its port, e.g. smtp.mailgun.org:587, smtp.gmail.com:587, smtp.qq.com:465\n; If the port ends is "465", SMTPS will be used. Using STARTTLS on port 587 is recommended per RFC 6409.\n; If the server supports STARTTLS it will always be used.\nHOST = smtp.mailgun.org:587\n; The email from address (RFC 5322). This can be just an email address, or the `"Name" <email@example.com>` format.\nFROM = noreply@gogs.localhost\n; The login user.\nUSER = noreply@gogs.localhost\n; The login password.\nPASSWORD =\n\n; Whether to disable HELO operation when the hostname is different.\nDISABLE_HELO =\n; The custom hostname for HELO operation, default is from system.\nHELO_HOSTNAME =\n\n; Whether to skip verifying the certificate of the server. Only use this for self-signed certificates.\nSKIP_VERIFY = false\n; Whether to use client certificates.\nUSE_CERTIFICATE = false\nCERT_FILE = custom/email/cert.pem\nKEY_FILE = custom/email/key.pem\n\n; Whether to use "text/plain" as content format.\nUSE_PLAIN_TEXT = false\n; Whether to attach a plaintext alternative to the MIME message while sending HTML emails.\n; It is used to support older mail clients and make spam filters happier.\nADD_PLAIN_TEXT_ALT = false\n\n[auth]\n; The valid duration of activate code in minutes.\nACTIVATE_CODE_LIVES = 180\n; The valid duration of reset password code in minutes.\nRESET_PASSWORD_CODE_LIVES = 180\n; Whether to require email confirmation for adding new email addresses.\n; Enable this option will also require user to confirm the email for registration.\nREQUIRE_EMAIL_CONFIRMATION = false\n; Whether to disallow anonymous users visiting the site.\nREQUIRE_SIGNIN_VIEW = false\n; Whether to disable self-registration. When disabled, accounts would have to be created by admins.\nDISABLE_REGISTRATION = false\n; Whether to enable captcha validation for registration\nENABLE_REGISTRATION_CAPTCHA = true\n\n; Whether to enable reverse proxy authentication via HTTP header.\nENABLE_REVERSE_PROXY_AUTHENTICATION = false\n; Whether to automatically create new users for reverse proxy authentication.\nENABLE_REVERSE_PROXY_AUTO_REGISTRATION = false\n; The HTTP header used as username for reverse proxy authentication.\nREVERSE_PROXY_AUTHENTICATION_HEADER = X-WEBAUTH-USER\n\n[user]\n; Whether to enable email notifications for users.\nENABLE_EMAIL_NOTIFICATION = false\n\n[session]\n; The session provider, either "memory", "file", or "redis".\nPROVIDER = memory\n; The configuration for respective provider:\n; - memory: does not need any config yet\n; - file: session file path, e.g. `data/sessions`\n; - redis: network=tcp,addr=:6379,password=macaron,db=0,pool_size=100,idle_timeout=180\nPROVIDER_CONFIG = data/sessions\n; The cookie name to store the session identifier.\nCOOKIE_NAME = i_like_gogs\n; Whether to set cookie in HTTPS only.\nCOOKIE_SECURE = false\n; The GC interval in seconds for session data.\nGC_INTERVAL = 3600\n; The maximum life time in seconds for a session.\nMAX_LIFE_TIME = 86400\n; The cookie name for CSRF token.\nCSRF_COOKIE_NAME = _csrf\n\n[cache]\n; The cache adapter, either "memory", "redis", or "memcache".\nADAPTER = memory\n; For "memory" only, GC interval in seconds.\nINTERVAL = 60\n; For "redis" and "memcache", connection host address:\n; - redis: network=tcp,addr=:6379,password=macaron,db=0,pool_size=100,idle_timeout=180\n; - memcache: `127.0.0.1:11211`\nHOST =\n\n[http]\n; The value for "Access-Control-Allow-Origin" header, default is not to present.\nACCESS_CONTROL_ALLOW_ORIGIN =\n\n[lfs]\n; The storage backend for uploading new objects.\nSTORAGE = local\n; The root path to store LFS objects on local file system.\nOBJECTS_PATH = data/lfs-objects\n\n[attachment]\n; Whether to enabled upload attachments in general.\nENABLED = true\n; The path to store attachments on the file system.\nPATH = data/attachments\n; File types that are allowed to be uploaded, e.g. "image/jpeg|image/png". Leave empty to allow any file type.\nALLOWED_TYPES = image/jpeg|image/png\n; The maximum size of each file in MB.\nMAX_SIZE = 4\n; The maximum number of files per upload.\nMAX_FILES = 5\n\n[release.attachment]\n; Whether to enabled upload attachments for releases.\nENABLED = true\n; File types that are allowed to be uploaded, e.g. "image/jpeg|image/png". Leave empty to allow any file type.\nALLOWED_TYPES = */*\n; The maximum size of each file in MB.\nMAX_SIZE = 32\n; The maximum number of files per upload.\nMAX_FILES = 10\n\n[time]\n; Specifies the format for fully outputed dates.\n; Values should be one of the following:\n; ANSIC, UnixDate, RubyDate, RFC822, RFC822Z, RFC850, RFC1123, RFC1123Z, RFC3339, RFC3339Nano, Kitchen, Stamp, StampMilli, StampMicro and StampNano.\n; For more information about the format see http://golang.org/pkg/time/#pkg-constants.\nFORMAT = RFC1123\n\n[picture]\n; The path to store user avatars on the file system.\nAVATAR_UPLOAD_PATH = data/avatars\n; The path to store repository avatars on the file system.\nREPOSITORY_AVATAR_UPLOAD_PATH = data/repo-avatars\n; Chinese users can use a custom avatar source, such as http://cn.gravatar.com/avatar/.\nGRAVATAR_SOURCE = gravatar\n; Whether to disable Gravatar, this value will be forced to be true in offline mode.\nDISABLE_GRAVATAR = false\n; Whether to enable federated avatar lookup uses DNS to discover avatar associated\n; with emails, see https://www.libravatar.org for details.\n; This value will be forced to be false in offline mode or when Gravatar is disbaled.\nENABLE_FEDERATED_AVATAR = false\n\n[markdown]\n; Whether to enable hard line break extension.\nENABLE_HARD_LINE_BREAK = false\n; The list of custom URL schemes that are allowed as links when rendering Markdown.\n; For example, "git" (for "git://") and "magnet" (for "magnet://").\nCUSTOM_URL_SCHEMES =\n; The list of file extensions that should be rendered/edited as Markdown.\n; Separate extensions with a comma. To render files with no extension as markdown, just put a comma.\nFILE_EXTENSIONS = .md,.markdown,.mdown,.mkd\n\n[smartypants]\n; Whether to enable the Smartypants extension.\nENABLED = false\nFRACTIONS = true\nDASHES = true\nLATEX_DASHES = true\nANGLED_QUOTES = true\n\n[admin]\n; Whether to disable regular (non-admin) users to create organizations.\nDISABLE_REGULAR_ORG_CREATION = false\n\n[webhook]\n; The list of enabled types for users to use, can be "gogs", "slack", "discord", "dingtalk".\nTYPES = gogs, slack, discord, dingtalk\n; Deliver timeout in seconds.\nDELIVER_TIMEOUT = 15\n; Whether to allow insecure certification.\nSKIP_TLS_VERIFY = false\n; The number of history information in each page.\nPAGING_NUM = 10\n\n; General settings of loggers.\n[log]\n; The root path for all log files, default is "log/" subdirectory.\nROOT_PATH =\n; Can be "console", "file", "slack" and "discord".\n; Use comma to separate multiple modes, e.g. "console, file"\nMODE = console\n; Buffer length of channel, keep it as it is if you don\'t know what it is.\nBUFFER_LEN = 100\n; Either "Trace", "Info", "Warn", "Error", "Fatal", default is "Trace"\nLEVEL = Trace\n\n; For "console" mode only\n[log.console]\n; Comment out to inherit\n; LEVEL =\n\n; For "file" mode only\n[log.file]\n; Comment out to inherit\n; LEVEL =\n; Whether to enable automated log rotate (switch of following options).\nLOG_ROTATE = true\n; Whether to segment log files daily.\nDAILY_ROTATE = true\n; The maximum size shift of single file, default is 28 means 1 << 28 = 256MB.\nMAX_SIZE_SHIFT = 28\n; The maximum number of lines of single file.\nMAX_LINES = 1000000\n; The expired days of log file (delete after max days).\nMAX_DAYS = 7\n\n; For "slack" mode only\n[log.slack]\n; Comment out to inherit\n; LEVEL =\n; Webhook URL\nURL =\n\n[log.discord]\n; Comment out to inherit\n; LEVEL =\n; Webhook URL\nURL =\n; The username to be displayed in notification.\nUSERNAME = %(BRAND_NAME)s\n\n[log.xorm]\n; Enable file rotation\nROTATE = true\n; Rotate every day\nROTATE_DAILY = true\n; Rotate once file size excesses x MB\nMAX_SIZE = 100\n; Maximum days to keep logger files\nMAX_DAYS = 3\n\n[log.gorm]\n; Whether to enable file rotation.\nROTATE = true\n; Whether to rotate file every day.\nROTATE_DAILY = true\n; The maximum file size in MB before next rotate.\nMAX_SIZE = 100\n; The maximum days to keep files.\nMAX_DAYS = 3\n\n[cron]\n; Enable running cron tasks periodically.\nENABLED = true\n; Run cron tasks when Gogs starts.\nRUN_AT_START = false\n\n[cron.update_mirrors]\n; Defines how often the mirror syncer checks if any mirror needs to be synchronized (based on the mirror update interval).\nSCHEDULE = @every 10m\n\n; Repository health check\n[cron.repo_health_check]\nSCHEDULE = @every 24h\nTIMEOUT = 60s\n; Arguments for command \'git fsck\', e.g. "--unreachable --tags"\n; see more on http://git-scm.com/docs/git-fsck/1.7.5\nARGS =\n\n; Check repository statistics\n[cron.check_repo_stats]\nRUN_AT_START = true\nSCHEDULE = @every 24h\n\n; Cleanup repository archives\n[cron.repo_archive_cleanup]\nRUN_AT_START = false\nSCHEDULE = @every 24h\n; Time duration to check if archive should be cleaned\nOLDER_THAN = 24h\n\n[git]\n; Disables highlight of added and removed changes\nDISABLE_DIFF_HIGHLIGHT = false\n; Max number of files shown in diff view\nMAX_GIT_DIFF_FILES = 100\n; Max number of lines allowed of a single file in diff view\nMAX_GIT_DIFF_LINES = 1000\n; Max number of characters of a line allowed in diff view\nMAX_GIT_DIFF_LINE_CHARACTERS = 2000\n; Arguments for command \'git gc\', e.g. "--aggressive --auto"\n; see more on http://git-scm.com/docs/git-gc/1.7.5\nGC_ARGS =\n\n; Operation timeout in seconds\n[git.timeout]\nMIGRATE = 600\nMIRROR = 300\nCLONE = 300\nPULL = 300\nGC = 60\n\n[mirror]\n; Defines the default interval (in hours) until the next sync for a mirror (after a successful mirror sync).\n; It can be overridden individually for each mirror repository in the settings.\nDEFAULT_INTERVAL = 8\n\n[api]\n; Max number of items will response in a page\nMAX_RESPONSE_ITEMS = 50\n\n[ui]\n; Number of repositories that are showed in one explore page\nEXPLORE_PAGING_NUM = 20\n; Number of issues that are showed in one page\nISSUE_PAGING_NUM = 10\n; Number of maximum commits showed in one activity feed\nFEED_MAX_COMMIT_NUM = 5\n; Value of "theme-color" meta tag, used by Android >= 5.0\n; An invalid color like "none" or "disable" will have the default style\n; More info: https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android\nTHEME_COLOR_META_TAG = `#ff5343`\n; Max size in bytes of files to be displayed (default is 8MB)\nMAX_DISPLAY_FILE_SIZE = 8388608\n\n[ui.admin]\n; Number of users that are showed in one page\nUSER_PAGING_NUM = 50\n; Number of repos that are showed in one page\nREPO_PAGING_NUM = 50\n; Number of notices that are showed in one page\nNOTICE_PAGING_NUM = 25\n; Number of organization that are showed in one page\nORG_PAGING_NUM = 50\n\n[ui.user]\n; Number of repos that are showed in one page\nREPO_PAGING_NUM = 15\n; Number of news feeds that are showed in one page\nNEWS_FEED_PAGING_NUM = 20\n; Number of commits that are showed in one page\nCOMMITS_PAGING_NUM = 30\n\n[prometheus]\n; Whether to enable Prometheus metrics.\nENABLED = true\n; Whether to enable HTTP Basic Authentication to protect metrics data.\nENABLE_BASIC_AUTH = false\n; The username for HTTP Basic Authentication.\nBASIC_AUTH_USERNAME =\n; The password for HTTP Basic Authentication.\nBASIC_AUTH_PASSWORD =\n\n; Extension mapping to highlight class\n; e.g. .toml=ini\n[highlight.mapping]\n\n[i18n]\nLANGS = en-US,zh-CN,zh-HK,zh-TW,de-DE,fr-FR,nl-NL,lv-LV,ru-RU,ja-JP,es-ES,pt-BR,pl-PL,bg-BG,it-IT,fi-FI,tr-TR,cs-CZ,sr-SP,sv-SE,ko-KR,gl-ES,uk-UA,en-GB,hu-HU,sk-SK,id-ID,fa-IR,vi-VN,pt-PT\nNAMES = English,简体中文,繁體中文（香港）,繁體中文（臺灣）,Deutsch,français,Nederlands,latviešu,русский,日本語,español,português do Brasil,polski,български,italiano,suomi,Türkçe,čeština,српски,svenska,한국어,galego,українська,English (United Kingdom),Magyar,Slovenčina,Indonesian,Persian,Vietnamese,Português\n\n; Used for datetimepicker\n[i18n.datelang]\nen-US = en\nzh-CN = zh\nzh-HK = zh-TW\nzh-TW = zh-TW\nde-DE = de\nfr-FR = fr\nnl-NL = nl\nlv-LV = lv\nru-RU = ru\nja-JP = ja\nes-ES = es\npt-BR = pt-BR\npl-PL = pl\nbg-BG = bg\nit-IT = it\nfi-FI = fi\ntr-TR = tr\ncs-CZ = cs-CZ\nsr-SP = sr\nsv-SE = sv\nko-KR = ko\ngl-ES = gl\nuk-UA = uk\nen-GB = en-GB\nhu-HU = hu\nsk-SK = sk\nid-ID = id\nfa-IR = fa\nvi-VN = vi\npt-PT = pt\n\n[other]\nSHOW_FOOTER_BRANDING = false\n; Show time of template execution in the footer\nSHOW_FOOTER_TEMPLATE_LOAD_TIME = true\n')])])]),n("p",[e._v("a")])])}),[],!1,null,null,null);n.default=a.exports}}]);