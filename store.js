/* XLL demo shared state — same origin only (GitHub Pages + local) */
(function (global) {
  var KEY = 'xll_demo_state_v1';

  function defaults() {
    return {
      version: 1,
      updatedAt: null,
      role: 'Nina',
      orders: {
        l6: {
          title: '理想 L6', titleFull: '理想 L6 · 2025款 Max', status: '进行中',
          meta: 'XLL260914-018 · Alex · 1 台',
          phase: 'fx', stuck: true, dur: '2天3小时', stepShort: '换汇', owner: '波塔',
          step: '内勤换汇', subline: '停留 <b>2 天 3 小时</b> · 责任人 <b>波塔</b> · 已催 2 次',
          remindName: '波塔', remindCar: '理想L6', remind: 2,
          tags: 'stuck fx', filter: ['stuck', 'fx'],
          money: [['收（人民币）', '¥46.8万', ''], ['付（美金）', '$6.2万 · 未付', ''], ['预估利润', '≈ ¥6,500', 'color:#4A8B64']],
          roles: [['业务员', '张青昊'], ['内勤', '波塔'], ['外勤', '那尔']],
          assignee: { sales: '张青昊', office: '波塔', field: '那尔' }
        },
        ford: {
          title: 'Ford Transit', titleFull: 'Ford Transit Custom', status: '询价中',
          meta: 'XLL260914-022 · Alex · 需求询价',
          phase: 'inquiry', stuck: true, dur: '超时', stepShort: '询价', owner: 'Nina',
          step: '询价待回复', subline: '停留 <b>超时</b> · 责任人 <b>Nina</b> · 超 30 分钟未回',
          remindName: 'Nina', remindCar: 'Ford Transit', remind: 0,
          tags: 'stuck inq', filter: ['stuck', 'inq'],
          money: [['收（人民币）', '待报价', ''], ['付（美金）', '待锁单', ''], ['预估利润', '—', '']],
          roles: [['业务员', 'Nina'], ['内勤', '—'], ['外勤', '—']],
          assignee: { sales: 'Nina', office: '—', field: '—' },
          accepted: false, quoted: false
        },
        q05: {
          title: '启源 Q05', titleFull: '启源 Q05', status: '待验车',
          meta: 'XLL260913-011 · Yeldos · 1 台',
          phase: 'inspect', stuck: true, dur: '1天5小时', stepShort: '验车', owner: '那尔',
          step: '外勤验车', subline: '停留 <b>1 天 5 小时</b> · 责任人 <b>那尔</b>',
          remindName: '那尔', remindCar: '启源Q05', remind: 0,
          tags: 'stuck', filter: ['stuck'],
          money: [['收（人民币）', '¥19.8万', ''], ['付（美金）', '$2.5万 · 已付', ''], ['预估利润', '≈ ¥9,000', 'color:#4A8B64']],
          roles: [['业务员', 'Nina'], ['内勤', '波塔'], ['外勤', '那尔']],
          assignee: { sales: 'Nina', office: '波塔', field: '那尔' }
        },
        su7: {
          title: '小米 SU7', titleFull: '小米 SU7', status: '换汇中',
          meta: 'XLL260914-019 · Bota · 1 台',
          phase: 'fx', stuck: false, dur: '8小时', stepShort: '换汇', owner: 'Nina',
          step: '内勤换汇', subline: '停留 <b>8 小时</b> · 责任人 <b>Nina</b>',
          remindName: 'Nina', remindCar: '小米SU7', remind: 0,
          tags: 'fx', filter: ['fx'],
          money: [['收（人民币）', '¥31.5万', ''], ['付（美金）', '$4.1万 · 未付', ''], ['预估利润', '≈ ¥9,000', 'color:#4A8B64']],
          roles: [['业务员', 'Nina'], ['内勤', '波塔'], ['外勤', '那尔']],
          assignee: { sales: 'Nina', office: '波塔', field: '那尔' }
        },
        x70: {
          title: '捷途 X70L', titleFull: '捷途 X70L', status: '待出境',
          meta: 'XLL260912-007 · Yeldos · 1 台',
          phase: 'exit', stuck: false, dur: '待出境', stepShort: '口岸', owner: 'Bota',
          step: '车辆出境', subline: '口岸待放行 · 责任人 <b>Bota</b>',
          remindName: 'Bota', remindCar: '捷途X70L', remind: 0,
          tags: 'exit', filter: ['exit'],
          money: [['收（人民币）', '¥28.6万', ''], ['付（美金）', '$3.7万 · 已付', ''], ['预估利润', '≈ ¥9,000', 'color:#4A8B64']],
          roles: [['业务员', 'Bota'], ['内勤', '波塔'], ['外勤', '那尔']],
          assignee: { sales: 'Bota', office: '波塔', field: '那尔' }
        },
        s07: {
          title: '深蓝 S07', titleFull: '深蓝 S07', status: '询价中',
          meta: 'XLL260914-025 · 新询价',
          phase: 'inquiry', stuck: false, dur: '2小时', stepShort: '询价', owner: '张青昊',
          step: '询价待回复', subline: '停留 <b>2 小时</b> · 责任人 <b>张青昊</b>',
          remindName: '张青昊', remindCar: '深蓝S07', remind: 0,
          tags: 'inq', filter: ['inq'],
          money: [['收（人民币）', '待报价', ''], ['付（美金）', '待锁单', ''], ['预估利润', '—', '']],
          roles: [['业务员', '张青昊'], ['内勤', '—'], ['外勤', '—']],
          assignee: { sales: '张青昊', office: '—', field: '—' }
        }
      },
      daily: { Nina: false, '张青昊': false, '波塔': false, '那尔': false },
      messages: [
        { id: 'm1', t: '21:10', title: '催办 · 理想 L6', body: '董事长催办换汇 · 波塔 · 第 2 次', to: '波塔', orderId: 'l6' },
        { id: 'm2', t: '18:30', title: '询价超时', body: 'Ford Transit · Nina · 请尽快报价', to: 'Nina', orderId: 'ford' },
        { id: 'm3', t: '20:40', title: '验车超时', body: '启源 Q05 · 那尔', to: '那尔', orderId: 'q05' }
      ]
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      var data = JSON.parse(raw);
      if (!data || data.version !== 1 || !data.orders) return defaults();
      return data;
    } catch (e) {
      return defaults();
    }
  }

  function save(state) {
    state.updatedAt = new Date().toISOString();
    localStorage.setItem(KEY, JSON.stringify(state));
    try {
      localStorage.setItem(KEY + '_tick', String(Date.now()));
    } catch (e) {}
    return state;
  }

  function reset() {
    var s = defaults();
    save(s);
    return s;
  }

  function stuckCount(state) {
    var n = 0, id;
    for (id in state.orders) if (state.orders[id].stuck) n++;
    return n;
  }

  function stuckList(state) {
    var list = [], id;
    for (id in state.orders) {
      if (state.orders[id].stuck) list.push(Object.assign({ id: id }, state.orders[id]));
    }
    list.sort(function (a, b) { return (b.remind || 0) - (a.remind || 0); });
    return list;
  }

  function todosForRole(state, role) {
    var map = {
      Nina: function (o, id) {
        return (o.assignee.sales === 'Nina') && (o.phase === 'inquiry' || (o.phase === 'fx' && o.owner === 'Nina'));
      },
      '张青昊': function (o) { return o.assignee.sales === '张青昊' && o.phase === 'inquiry'; },
      '波塔': function (o) { return o.phase === 'fx' && (o.assignee.office === '波塔' || o.owner === '波塔'); },
      '那尔': function (o) { return o.phase === 'inspect' && o.assignee.field === '那尔'; }
    };
    var fn = map[role] || function () { return false; };
    var list = [], id, o;
    for (id in state.orders) {
      o = state.orders[id];
      if (fn(o, id)) list.push(Object.assign({ id: id }, o));
    }
    return list;
  }

  function myOrders(state, role) {
    var list = [], id, o;
    for (id in state.orders) {
      o = state.orders[id];
      if (o.assignee.sales === role || o.assignee.office === role || o.assignee.field === role || o.owner === role) {
        list.push(Object.assign({ id: id }, o));
      }
    }
    return list;
  }

  function messagesFor(state, role) {
    return (state.messages || []).filter(function (m) { return m.to === role; });
  }

  function pushMsg(state, msg) {
    state.messages = state.messages || [];
    state.messages.unshift(msg);
    if (state.messages.length > 30) state.messages.length = 30;
  }

  function nowHM() {
    var d = new Date();
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }

  /** @returns {{ok:boolean, state:object, toast?:string}} */
  function applyAction(action, payload) {
    var state = load();
    var id = payload && payload.orderId;
    var o = id ? state.orders[id] : null;
    var toast = '';

    if (action === 'accept' && o) {
      o.accepted = true;
      o.dur = '计时中';
      o.subline = '已接单 · 责任人 <b>' + o.owner + '</b> · 制度 30 分钟内报价';
      o.step = '询价处理中';
      toast = '已接单，开始计时';
    } else if (action === 'quote' && o) {
      o.quoted = true;
      o.accepted = true;
      o.phase = 'quoted';
      o.stuck = false;
      o.status = '已报价';
      o.dur = '刚报价';
      o.stepShort = '已报价';
      o.step = '已报价 · 待意向';
      o.subline = '报价完成 · 责任人 <b>' + o.owner + '</b>';
      o.filter = ['inq'];
      o.tags = 'inq';
      o.money = [['收（人民币）', '待锁单', ''], ['付（美金）', '待锁单', ''], ['预估利润', '待核算', '']];
      toast = o.title + ' 已报价，已同步老板端';
      pushMsg(state, { id: 'q' + Date.now(), t: nowHM(), title: '报价完成', body: o.title + ' · ' + o.owner, to: '波塔', orderId: id });
    } else if (action === 'fx_done' && o) {
      o.phase = 'license';
      o.stuck = false;
      o.status = '待出证';
      o.dur = '刚完成';
      o.stepShort = '出证';
      o.step = '供应商到账 / 出证';
      o.subline = '换汇已确认 · 下一节点出证';
      o.owner = o.assignee.office || o.owner;
      o.filter = [];
      o.tags = '';
      o.money[1] = ['付（美金）', o.money[1][1].replace('未付', '已付'), ''];
      toast = o.title + ' 换汇完成，已同步老板端';
    } else if (action === 'inspect_done' && o) {
      o.phase = 'exit';
      o.stuck = false;
      o.status = '待出境';
      o.dur = '待出境';
      o.stepShort = '口岸';
      o.step = '车辆出境';
      o.subline = '验车完成 · 口岸待放行';
      o.filter = ['exit'];
      o.tags = 'exit';
      toast = o.title + ' 验车完成，已同步老板端';
    } else if (action === 'daily') {
      var role = payload.role;
      state.daily[role] = true;
      toast = '日报已提交';
      // remove from boss staff异常 conceptually via daily flag
    } else if (action === 'remind') {
      if (!o) return { ok: false, state: state };
      o.remind = (o.remind || 0) + 1;
      o.subline = (o.subline || '').replace(/已催 \d+ 次/, '已催 ' + o.remind + ' 次');
      if (o.subline.indexOf('已催') < 0) o.subline += ' · 已催 ' + o.remind + ' 次';
      pushMsg(state, {
        id: 'r' + Date.now(), t: nowHM(),
        title: '催办 · ' + o.title,
        body: '董事长催办 · 第 ' + o.remind + ' 次',
        to: o.remindName || o.owner,
        orderId: id
      });
      toast = '已提醒 ' + (o.remindName || o.owner);
    } else if (action === 'set_role') {
      state.role = payload.role;
    } else if (action === 'reset') {
      state = defaults();
      toast = '演示数据已重置';
    } else {
      return { ok: false, state: state, toast: '无法执行' };
    }

    save(state);
    return { ok: true, state: state, toast: toast };
  }

  function subscribe(cb) {
    function onStorage(e) {
      if (!e.key || e.key === KEY || e.key === KEY + '_tick') cb(load());
    }
    window.addEventListener('storage', onStorage);
    var timer = setInterval(function () { cb(load()); }, 2000);
    return function () {
      window.removeEventListener('storage', onStorage);
      clearInterval(timer);
    };
  }

  global.XLLStore = {
    KEY: KEY,
    defaults: defaults,
    load: load,
    save: save,
    reset: reset,
    stuckCount: stuckCount,
    stuckList: stuckList,
    todosForRole: todosForRole,
    myOrders: myOrders,
    messagesFor: messagesFor,
    applyAction: applyAction,
    subscribe: subscribe
  };
})(typeof window !== 'undefined' ? window : this);
