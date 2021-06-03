# Utilities
import argparse
import datetime as dt
import re
import os


def parser_data(args):
    """
    receive the args an create the data
    return the data as a dictionary
    """
    data = {
        'date': args.date.strftime("%Y-%m-%d"),
        'title': args.title[0],
        'category': args.category[0],
        'tags': args.tags
    }
    return data


def create_file_name(data):
    title = re.sub(r'\s+', '-', data['title'])
    file_name = data['date'] + '-' + title + '.md'
    return file_name


def create_file(data):
    text = '---\n\
layout: "post"\n\
title: "{title}"\n\
category: {category}\n\
date: {date}\n\
hide: False\n\
excerpt_separator: <!--more-->\n\
feature-img: "assets/img/pexels/computer.jpeg"\n\
tags: [{tags}]\n\
---'.format(
        date=data['date'],
        title=data['title'],
        category=data['category'],
        tags=data['tags']
    )

    return text


def save_the_file(text, file_name):

    path = '/Users/johan/Documents/Blognotes/docs/_posts/{category}/'.format(
        category=data['category']
    )
    img_path = '/Users/johan/Documents/Blognotes/docs/assets/img/posts/{category}/{file_name}'.format(
        category=data['category'],
        file_name=file_name[0:-3]
    )
    if not os.path.exists(img_path):
        os.makedirs(img_path)
    with open(path + file_name, 'w') as f:
        f.write(text)
        print('file created at: {}'.format(path + file_name))
        print('folder created at: {}'.format(img_path))


def check_date(string):
    try:
        value = dt.datetime.strptime(string, '%d/%m/%y')
    except:
        raise argparse.ArgumentTypeError(
            'The {} doesn\'t follow the date format %d/%m/%y'.format(string))
    return value


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Create a New Post')
    parser.add_argument(
        '--title',
        '-t',
        metavar='title',
        type=str,
        nargs=1,
        help='title of the post, you should write between \'\'',
        required=True
    )
    parser.add_argument(
        '--date',
        '-d',
        metavar='date',
        type=check_date,
        default=dt.datetime.now(),
        nargs='?',
        help='date of the post in format dd/mm/yy',
        required=False
    )
    parser.add_argument(
        '--category',
        '-c',
        metavar='category',
        type=str,
        nargs=1,
        help='category of the post',
        required=True
    )
    parser.add_argument(
        '--tags',
        '-tg',
        metavar='tags',
        type=str,
        default='',
        nargs='*',
        help='tags of the post write between \'\'',
        required=False
    )

    args = parser.parse_args()
    data = parser_data(args)
    file_name = create_file_name(data)
    text = create_file(data)
    save_the_file(text, file_name)
