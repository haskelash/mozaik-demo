import Mozaik from 'mozaik';
import config from '../config';
import github from 'mozaik-ext-github/client';
import travis from 'mozaik-ext-travis/client';
import gitlab from 'mozaik-ext-gitlab/client';

const mozaik = new Mozaik(config);

mozaik.bus.registerApi('github', github);
mozaik.bus.registerApi('travis', travis);
mozaik.bus.registerApi('gitlab', gitlab);

mozaik.startServer();