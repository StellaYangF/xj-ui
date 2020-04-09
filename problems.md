## Git
- SSL_ERROR_SYSCALL in connection to github.com:443
> 这种报错是因为开设了 http.proxy 代理，去掉即可
```bash
git config --global unset http.proxy
```