FROM node:20

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Install Python
RUN apt install -y python3 python3-pip

# Create a symlink for python
RUN ln -s /usr/bin/python3 /usr/bin/python

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Download git-completion.bash and git-prompt.sh
RUN mkdir -p /usr/local/etc/bash_completion.d \
    && curl -o /usr/local/etc/bash_completion.d/git-completion.bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash \
    && curl -o /usr/local/etc/bash_completion.d/git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh

# Enable git completion and prompt
RUN echo "source /usr/local/etc/bash_completion.d/git-completion.bash" >> /home/node/.bashrc \
    && echo "source /usr/local/etc/bash_completion.d/git-prompt.sh" >> /home/node/.bashrc \
    && echo 'PS1="\[\e[32m\]\u@\h \[\e[33m\]\w\[\e[36m\]\$(__git_ps1)\[\e[0m\] $ "' >> /home/node/.bashrc