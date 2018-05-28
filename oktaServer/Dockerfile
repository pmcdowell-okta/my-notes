FROM centos:7
ENV container docker
ENV GOPATH /root


RUN printf "       _    _  \n  ___ | |__| |_  __ _ \n / _ \| / /|  _|/ _\` |\n \___/|_\_\ \__|\__,_\n"


RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in ; do [ $i == \
systemd-tmpfiles-setup.service ] || rm -f $i; done); \
rm -f /lib/systemd/system/multi-user.target.wants/;\
rm -f /etc/systemd/system/.wants/;\
rm -f /lib/systemd/system/local-fs.target.wants/; \
rm -f /lib/systemd/system/sockets.target.wants/udev; \
rm -f /lib/systemd/system/sockets.target.wants/initctl; \
rm -f /lib/systemd/system/basic.target.wants/;\
rm -f /lib/systemd/system/anaconda.target.wants/*;


#RUN mkdir /okta
ADD https://companyx-admin.okta.com/static/agents/ProvisioningAgent/OktaProvisioningAgent-01.01.00.x86_64.rpm /
ADD https://raw.githubusercontent.com/pmcdowell-okta/golangOktaScimServer/master/goLangScimServer.linux /
RUN chmod 777 /goLangScimServer.linux
RUN chmod +x /goLangScimServer.linux
RUN yum update -y
RUN yum clean all


#Don't need JDK, but just incase anyone still uses Java
RUN yum install -y java-1.7.0-openjdk


RUN yum install -y wget curl nc git golang
RUN echo Download Gorilla Stuff
RUN go get github.com/gorilla/mux
RUN go get github.com/gorilla/sessions


RUN git clone https://github.com/pmcdowell-okta/golangOktaScimServer.git


#installing wget, curl, and netCat for testing !


RUN yum -y install initscripts


#this makes the service commands work in CentOs


VOLUME [ "/sys/fs/cgroup" ]
CMD ["/usr/sbin/init"]

