# Diary

Web-based app that allows you to keep a diary.

### Installation using docker

```bash
# Clone repository and build docker container
git clone https://github.com/ohgodwynona/diary
cd diary
docker build -t diary .

# Create directory for the app's data
mkdir ~/.diary
```

For convenience, add this alias to your `.bashrc` file

```bash
alias diary="docker run --rm -p 4000:4000 -v ~/.diary:/app/volume diary"
```

### Usage

Type `diary` in your shell, go to `http://localhost:4000/` and start writing about your life.
