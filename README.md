# Diary

Web-based app that allows you to keep a diary.

### Installation using docker

```bash
git clone https://github.com/ohgodwynona/diary
cd diary
docker build -t diary .
```

### Usage

For your convenience, add this alias to your .bashrc file.

```bash
alias diary="docker run --rm -p 4000:4000 diary"
```

Then, simply run `diary` and start making records :)
