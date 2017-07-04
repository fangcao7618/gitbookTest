import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'h1': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#EFEAEA' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 3 }]
  },
  'h2': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#EFEAEA' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 3 }]
  },
  'markdown-section>:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-wrapper': {
    'marginTop': [{ 'unit': 'em', 'value': -1.275 }]
  },
  'book book-body page-wrapper page-inner sectionnormal': {
    'minHeight': [{ 'unit': 'px', 'value': 350 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'book book-body page-wrapper page-inner sectionnormal hr': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'em', 'value': 1.7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.7 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'backgroundColor': '#e7e7e7',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#e7e7e7' }]
  },
  'video-js': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'pre[class*="language-"]': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': '#f7f7f7',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'book book-body page-wrapper page-inner sectionnormal': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontFamily': '"ubuntu", "Tahoma", "Microsoft YaHei", arial, sans-serif'
  },
  'aceCode': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': '!important' }]
  },
  'input[type=checkbox]': {
    'marginLeft': [{ 'unit': 'em', 'value': -2 }]
  }
});
