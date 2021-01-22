<template>
  <footer>
    <p>欢迎使用MurphyUI</p>
    <p>作者邮箱：<a href="mailto:987127314@qq.com">987127314@qq.com</a></p>
    <a target="_blank" href="https://github.com/murrrrphy">
      <svg>
        <use xlink:href="#icon-GitHub"></use>
      </svg>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
  footer {
    height: 25vh;
    background: rgb(69, 88, 193);
    position: relative;

    p {
      color: #fff;
      font-size: 10px;
      margin: 20px auto auto 100px;
    }

    svg {
      position: absolute;
      right: 8%;
      top: 60%;
      height: 2em;
      width: 2em;
      transition: 0.3s;

      &:hover {
        transform: scale(1.25);
      }
    }

    &::before {
      content: '';
      display: inline-block;
      top: 0;
      left: 0;
      width: 100vw;
      height: 30%;
      background: #ffffff;
      clip-path: ellipse(67% 59% at 50% 40%);
    }
  }
</style>