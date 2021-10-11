![Test](https://github.com/heowc/hexo-tag-gdemo/workflows/CI/badge.svg)

# hexo-tag-gdemo

[glorious-demo](https://github.com/glorious-codes/glorious-demo) tag plugin for Hexo (Based on version `0.11.12`)

# Introduction

This is a Hexo tag plugin which allow you to glorious-demo on your blog posts.

# DEMO

[Demo Link](https://heowc.github.io/2018/11/14/introduction-hexo-tag-gdemo/)

# Installation

```text
npm install @heowc/hexo-tag-gdemo
```

※ Deprecated `npm install hexo-tag-gdemo`

# Usage

```text
{% gdemo_terminal command [minHeight] [windowTitle] [onCompleteDelay] [promptString] [id] [highlightingLang] %}
content
{% endgdemo_terminal %}
```

or

```text
{% gdemo_editor [minHeight] [windowTitle] [onCompleteDelay] [id] [highlightingLang] %}
content
{% endgdemo_editor %}
```

## command

command represents one or more commands separated by ';'. Be ware that the commands can not contain ' as hexo would assume that the argument is finished and the next will follow what will lead to the object not beeing rendered.

## minHeight

minHeight defines the minimal hight of the editor/terminal window. Beware that it can grow depending on the content you provide.

## windowTitle

windowTitle will be displayed as title of the editor/terminal window. Use whatever you like.

## onCompleteDelay

onCompleteDelay defines the wait delay, after a line of commands/code was typed. This does not affect the content in gdemo_terminal. Content will instantly appear after all commands are typed.

## promptString

The promptString defines, which character or character sequence will be displayed in front of the typed commands. You can use '>' or 'root@local:/$ ' or anything else you like to display.

## id

The id parameter sets a unique id for the instance of editor/terminal. The IDs have to be different for multiple instances inside of the same post.

## highlightingLang

highlightingLang defines the designated highlighting language. If not specified, javascript will be used. You can find a list of supported languages at the [prismjs homepage](https://prismjs.com/#supported-languages).

# `_config.yml`

If you do not want to use the CDN, fill in the following:

```yml
gdemo:
  style_url:
  script_url: 
  prismjs_theme:
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
