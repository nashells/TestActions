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
