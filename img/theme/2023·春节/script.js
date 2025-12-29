fireworksColor = ["#F39FC4", "#F4795F", "#ED8484"]
fireworksCircleColor = "#ED8484"
ichikaBlurBg = 'rgba(255,235,235,0.88)'
ichikaNoBlurBg = 'rgba(255,235,235,0.95)'

try {
    let data = loadData('bgBlur', 1440 * 30)
    if (typeof (data) == "boolean") layoutSwitch('bgBlur', data)
    else localStorage.removeItem('bgBlur');
} catch (error) { localStorage.removeItem('bgBlur')}