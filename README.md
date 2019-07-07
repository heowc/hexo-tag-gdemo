# hexo-tag-gdemo

[glorious-demo](https://github.com/glorious-codes/glorious-demo) tag plugin for Hexo (Based on version `0.8.0`)

# Introduction

This is a Hexo tag plugin which allow you to glorious-demo on your blog posts.

# DEMO

[Demo Link](https://heowc.github.io/2018/11/14/introduction-hexo-tag-gdemo/)

# Installation

```text
npm install hexo-tag-gdemo
```

# Usage

```text
{% gdemo_terminal command [minHeight] [windowTitle] [onCompleteDelay] [promptString] [id] %}
content
{% endgdemo_terminal %}
```

or

```text
{% gdemo_editor [minHeight] [windowTitle] [onCompleteDelay] [id] %}
content
{% endgdemo_editor %}
```

# `_config.yml`

If you do not want to use the CDN, fill in the following:

```yml
gdemo:
  style_url:
  script_url: 
```

# FAQ

Please read here if you can not display gdemo well.

[hexo-tag-gdemo/issues/](https://github.com/heowc/hexo-tag-gdemo/issues)

# Example

### 1. When using `gdemo_terminal`

```text
{% gdemo_terminal 'node ./demo' '250px' 'bash' '500' '$' 'demo-teriminal' %}
Hello World!
{% endgdemo_terminal %}
```

### 2. When using `gdemo_terminal` [multiple commands]
   
- command can be divided into multiple commands based on `;`.
    
```text
{% gdemo_terminal 'cd /usr/bin;./node ./demo' '250px' 'bash' '500' '$' 'demo-teriminal' %}
Hello World!
{% endgdemo_terminal %}
```

### 3. When using `gdemo_editor`

```text
{% gdemo_editor '250px' 'bash' '500' 'demo-editor' %}
function greet(){
  console.log("Hello World!");
}

greet();
{% endgdemo_editor %}
```

> See more [here](https://github.com/glorious-codes/glorious-demo).

# License

MIT

# Thanks

- [@rafaelcamargo](https://github.com/rafaelcamargo)
