$(function () {
	$('#wmd-editarea textarea').attr('placeholder', '请输入文章内容...（开启粘贴上传功能后，支持图片粘贴上传哦~）');
	$('#wmd-button-bar .wmd-edittab').remove();
	$('#wmd-button-row .wmd-spacer').remove();
	$('#wmd-button-row #wmd-code-button').remove();
	$('#wmd-button-row #wmd-more-button').remove();
	$('#wmd-fullscreen-button').on('click', function () {
		$('.fullscreen #text').css('top', $('.fullscreen #wmd-button-bar').outerHeight());
	});
	/* 增加自定义功能 */
	const items = [
		{
			title: '默认卡片',
			id: 'wmd-card-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M928.775 187.554H94.113c-15.364 0-27.822 12.49-27.822 27.895v585.79c0 15.405 12.458 27.895 27.822 27.895h834.662c15.363 0 27.821-12.49 27.821-27.895v-585.79c0-15.405-12.458-27.895-27.821-27.895zm-35.77 577.428H129.882V251.706h763.123v513.276z" fill="#9b9b9b"/><path d="M808.546 380.025H214.352c-11.532 0-20.865 9.37-20.865 20.922v22.323c0 11.55 9.333 20.922 20.865 20.922h594.194c11.522 0 20.867-9.372 20.867-20.922v-22.323c-.001-11.55-9.345-20.922-20.867-20.922zM363.38 636.662H214.352c-11.532 0-20.865 9.356-20.865 20.92v22.312c0 11.564 9.333 20.921 20.865 20.921H363.38c11.534 0 20.866-9.358 20.866-20.921v-22.311c0-11.565-9.332-20.92-20.866-20.92z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '回复可见',
			id: 'wmd-hide-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M554.667 438.101V277.333h-85.334v160.768l-139.221-80.384-42.667 73.899L426.667 512l-139.222 80.384 42.667 73.899 139.221-80.384v160.768h85.334V585.899l139.221 80.384 42.667-73.899L597.333 512l139.222-80.384-42.667-73.899-139.221 80.384z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '网易云歌单',
			id: 'wmd-mlist-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M806.3 435.8L553.8 320c-17.4-8-38.2-.9-46.5 15.8l-123.2 248c-8.2-7.9-17.7-14.9-28.8-20-52.3-24-114.8-2.7-139.8 47.5-25 50.2-2.8 110.3 49.4 134.3 52.3 24 114.8 2.7 139.8-47.5l120.5-242.4c8.3-16.7 29.1-23.8 46.5-15.8L698 497.7c17.4 8 24.7 28 16.4 44.7l-78.1 157.1c-8.2-7.9-17.7-14.9-28.8-20-52.3-24-114.8-2.7-139.8 47.5-25 50.2-2.8 110.3 49.4 134.3 52.3 24 114.8 2.7 139.8-47.5l165.7-333.2c8.4-16.8 1.1-36.8-16.3-44.8zM269.7 358c-28.8 17.1-37.8 53.5-19.9 81.2 17.8 27.7 55.7 36.3 84.5 19.1 28.8-17.1 37.8-53.5 19.9-81.2L268 243.4c-5.9-9.2-3-21.3 6.6-27l17.4-10.3c9.6-5.7 12.6-17.9 6.7-27.1L288 162.3c-6-9.2-18.6-12.1-28.2-6.4l-52.2 31c-9.6 5.7-12.6 17.8-6.6 27l88 136.9c-6.6 1.3-13.2 3.6-19.3 7.2z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '网易云音乐',
			id: 'wmd-music-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M263.715 756.045a111.411 141.312 83.299 1 0 280.693-32.979 111.411 141.312 83.299 1 0-280.693 32.98z" fill="#9b9b9b"/><path d="M497.664 228.966h23.757c13.107 0 23.757 10.65 23.757 23.757V737.28h-47.514V228.966z" fill="#9b9b9b"/><path d="M593.92 294.298c-32.768-14.746-55.706-47.719-55.706-86.426 0-28.672 13.108-54.477 33.383-71.68-42.394 9.42-73.933 47.104-73.933 92.16 0 52.224 41.78 94.413 94.003 94.413h2.253v-28.467z" fill="#9b9b9b"/><path d="M681.984 422.912c0-76.39-61.85-138.24-138.24-138.24-16.18 0-31.744 2.867-46.08 7.782v38.912c9.83-2.457 20.07-3.686 30.72-3.686 71.27 0 129.024 57.754 129.024 129.024 0 24.166-6.758 46.9-18.227 66.15 26.419-25.19 42.803-60.62 42.803-99.942z" fill="#9b9b9b"/></svg>'
		},
		{
			title: 'HTML代码',
			id: 'wmd-html-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M832 832V320L640 128H256c-38.4 0-64 25.6-64 64v640c0 38.4 25.6 64 64 64h512c32 0 64-25.6 64-64zM614.4 192L768 352v480H256V192h358.4z" fill="#9b9b9b"/><path d="M550.4 403.2c-12.8 0-25.6 6.4-32 19.2l-51.2 204.8c-6.4 12.8 6.4 25.6 19.2 32h6.4c12.8 0 19.2-6.4 25.6-19.2l51.2-204.8c6.4-12.8-6.4-25.6-19.2-32zm-140.8 38.4c-6.4-12.8-25.6-12.8-38.4 0L300.8 512c-12.8 12.8-12.8 25.6 0 38.4l70.4 70.4c6.4 6.4 12.8 6.4 19.2 6.4 6.4 0 12.8 0 19.2-6.4 12.8-12.8 12.8-25.6 0-38.4l-51.2-51.2 51.2-51.2c12.8-12.8 12.8-32 0-38.4zm256 0c-12.8-12.8-25.6-12.8-38.4 0s-12.8 25.6 0 38.4l51.2 51.2-51.2 51.2c-12.8 12.8-12.8 25.6 0 38.4 6.4 6.4 12.8 6.4 19.2 6.4s12.8 0 19.2-6.4l70.4-70.4c12.8-12.8 12.8-25.6 0-38.4l-70.4-70.4z" fill="#9b9b9b"/></svg>'
		},
		{
			title: 'H1 ~ H6标题',
			id: 'wmd-title-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M341.333 213.333v277.334h341.334V213.333H768v640h-85.333V576H341.333v277.333H256v-640h85.333z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '表格',
			id: 'wmd-table-button',
			svg: '<svg class="icon" viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg"><path d="M874.725 393.106c4.438 0 8.064-3.627 8.064-8.06v-60.454c0-4.438-3.626-8.063-8.064-8.063H709.484v-167.26c0-4.432-3.627-8.058-8.06-8.058h-64.483c-4.438 0-8.064 3.626-8.064 8.059v167.259H399.152v-167.26c0-4.432-3.626-8.058-8.065-8.058h-64.483c-4.432 0-8.058 3.626-8.058 8.059v167.259H149.27c-4.433 0-8.059 3.625-8.059 8.063v60.455c0 4.432 3.626 8.059 8.059 8.059h169.276v237.789H149.27c-4.433 0-8.059 3.625-8.059 8.058v60.455c0 4.432 3.626 8.063 8.059 8.063h169.276v167.252c0 4.44 3.627 8.065 8.058 8.065h64.483c4.439 0 8.065-3.626 8.065-8.065V707.471h229.725v167.252c0 4.44 3.627 8.065 8.064 8.065h64.483c4.433 0 8.06-3.626 8.06-8.065V707.471h165.24c4.439 0 8.064-3.63 8.064-8.063v-60.455c0-4.433-3.626-8.058-8.063-8.058H709.484v-237.79h165.241zM628.877 630.895H399.152v-237.79h229.725v237.79zm0 0" fill="#9b9b9b"/></svg>'
		},
		{
			title: '代码段',
			id: 'wmd-snippet-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M768 128a128 128 0 0 1 128 128v512a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h512zm0 64H256a64 64 0 0 0-63.84 59.2L192 256v512a64 64 0 0 0 59.2 63.84l4.8.16h512a64 64 0 0 0 63.84-59.2l.16-4.8V256a64 64 0 0 0-59.2-63.84L768 192zM562.08 328.064a32 32 0 0 1 21.344 36.8l-.96 3.616-94.88 288a32 32 0 0 1-61.76-16.416l.96-3.616 94.88-288a32 32 0 0 1 40.416-20.384zm-183.68 35.36a32 32 0 0 1 8.608 41.44l-2.24 3.36-77.28 103.04 77.312 103.04a32 32 0 0 1-3.36 42.24l-3.04 2.56a32 32 0 0 1-42.208-3.296l-2.592-3.072-91.712-122.24a32 32 0 0 1-2.304-34.88l2.304-3.52 91.712-122.24a32 32 0 0 1 44.8-6.4zm267.2 0a32 32 0 0 1 42.208 3.36l2.624 3.04 91.68 122.24 2.304 3.52a32 32 0 0 1 0 31.36l-2.304 3.52-91.68 122.24-2.624 3.104a32 32 0 0 1-38.816 5.536l-3.36-2.24-3.072-2.56a32 32 0 0 1-5.568-38.848l2.24-3.36 77.28-103.072-77.28-103.04-2.24-3.36a32 32 0 0 1 8.64-41.44z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '行内代码',
			id: 'wmd-code-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M920.887 527.046l-206.45 206.45c-8.142 8.146-21.347 8.146-29.493 0l-29.493-29.493c-8.146-8.142-8.146-21.347 0-29.493l162.213-162.213-162.212-162.208c-8.146-8.146-8.146-21.351 0-29.497l29.493-29.493c8.146-8.146 21.351-8.146 29.493 0l206.45 206.45c8.15 8.146 8.15 21.351-.001 29.497zM434.759 857.498l-37.643-10.54c-10.394-2.911-16.788-13.193-14.281-22.969L550.47 179.251c2.682-10.01 13.877-15.712 25.001-12.73l40.287 10.794c11.128 2.982 17.973 13.514 15.287 23.528L458.12 845.068c-2.511 9.777-12.967 15.341-23.361 12.43zm-66.214-153.495l-29.493 29.493c-8.142 8.146-21.347 8.146-29.493 0l-206.45-206.45c-8.146-8.146-8.146-21.351 0-29.497l206.45-206.45c8.146-8.146 21.351-8.146 29.493 0l29.493 29.493c8.146 8.146 8.146 21.351 0 29.497L206.332 512.297 368.545 674.51c8.146 8.146 8.146 21.351 0 29.493z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '缩进空格',
			id: 'wmd-nbsp-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M192 672h640v-96h64v256h-64v-96H192v96h-64V576h64v96zm285.504-480h69.056l141.504 370.176h-64.896l-33.664-92.8H434.496l-33.664 92.8H336L477.504 192zm-24.832 227.584h118.656l-58.048-162.24h-2.048l-58.56 162.24z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '删除线',
			id: 'wmd-delete-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M926.952 468.969H566.87a1576.89 1576.89 0 0 0-29.776-5.655c-14.986-2.733-20.923-3.861-29.026-5.467-48.343-9.424-77.465-18.848-100.649-32.228-33.073-19.317-49.187-45.518-49.187-80.195 0-34.87 14.323-63.798 41.464-83.87 26.761-19.791 64.834-30.255 110.066-30.255 51.642 0 91.51 13.575 118.551 40.336 13.759 13.57 23.844 30.25 29.97 49.567 1.223 3.865 2.636 9.424 4.054 16.777.846 4.524 4.9 7.726 9.326 7.726h68.608c5.273 0 9.516-4.335 9.516-9.516v-.944c-.659-6.41-1.224-11.402-1.886-15.079-6.88-40.994-26.385-76.991-56.258-103.942-41.84-38.169-103.38-58.24-177.826-58.24-68.134 0-129.48 17.057-172.739 47.965-24.125 17.343-42.785 38.827-55.223 63.798-12.723 25.539-19.128 55.039-19.128 87.548 0 27.801 5.37 51.361 16.304 72.09 7.817 14.799 18.469 27.803 32.131 39.583H97.66c-4.145 0-7.536 3.39-7.536 7.537v56.542c0 4.15 3.392 7.542 7.536 7.542h408.242c1.978.377 3.671.754 5.558 1.132 29.118 5.838 46.65 9.796 62.764 14.324 21.673 6.124 38.261 12.53 52.02 20.26 33.737 19.037 50.229 46.365 50.229 83.87 0 33.264-14.61 62.952-41.091 83.682-28.741 22.525-71.244 34.304-122.98 34.304-41.18 0-76.045-8.01-103.849-23.559-27.423-15.36-46.27-37.506-56.26-65.497-.75-2.07-1.602-4.9-2.546-8.48-1.127-4.146-4.992-7.068-9.137-7.068H265.5c-5.279 0-9.516 4.335-9.516 9.52v.94c.19 2.167.378 3.962.567 5.374 6.124 45.987 28.552 83.682 66.624 111.953 44.384 32.795 106.863 50.134 180.748 50.134 79.347 0 145.879-18.66 192.431-53.998 23.56-17.808 41.653-39.766 53.81-65.023 12.25-25.538 18.562-54.565 18.562-86.227 0-29.968-5.462-55.032-16.772-76.71-5.466-10.556-12.345-20.26-20.545-29.026H926.95c4.15 0 7.541-3.392 7.541-7.537v-56.543c.001-4.054-3.39-7.445-7.54-7.445zm0 0" fill="#9b9b9b"/></svg>'
		},
		{
			title: '任务列表',
			id: 'wmd-task-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M593.92 215.04c112.64 0 204.8 92.16 204.8 204.8v204.8c0 112.64-92.16 204.8-204.8 204.8h-204.8c-112.64 0-204.8-92.16-204.8-204.8v-204.8c0-112.64 92.16-204.8 204.8-204.8h204.8m0-51.2h-204.8c-143.36 0-256 112.64-256 256v204.8c0 143.36 112.64 256 256 256h204.8c143.36 0 256-112.64 256-256v-204.8c0-138.24-112.64-256-256-256z" fill="#9b9b9b"/><path d="M527.36 762.88L230.4 460.8l76.8-61.44 174.08 133.12c71.68-81.92 230.4-250.88 445.44-384l20.48 40.96C747.52 373.76 583.68 634.88 527.36 762.88m0 0" fill="#9b9b9b"/></svg>'
		},
		{
			title: 'DPlayer视频',
			id: 'wmd-dplayer-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M858.88 244.48H676.864l61.184-61.184a25.6 25.6 0 0 0-36.096-36.096l-97.536 97.28H421.888l-97.28-97.28a25.6 25.6 0 0 0-36.352 0 25.6 25.6 0 0 0 0 36.096l61.184 61.184H167.68a25.6 25.6 0 0 0-25.6 25.6v490.752a25.6 25.6 0 0 0 25.6 25.6h691.2a25.6 25.6 0 0 0 25.6-25.6V270.08a25.6 25.6 0 0 0-25.6-25.6zm-25.6 490.752h-640V295.68h640zm-89.6 97.024h-460.8a25.6 25.6 0 0 0 0 51.2h460.8a25.6 25.6 0 1 0 0-51.2z" fill="#9b9b9b"/><path d="M439.808 623.104a25.6 25.6 0 0 0 12.8 3.584 25.6 25.6 0 0 0 12.8-3.584l171.008-98.56a25.6 25.6 0 0 0 0-44.544l-171.008-98.56a25.6 25.6 0 0 0-38.4 22.016v197.632a25.6 25.6 0 0 0 12.8 22.016zM478.208 448l94.208 54.272-94.208 54.272z" fill="#9b9b9b"/></svg>'
		},
		{
			title: 'BiliBili视频',
			id: 'wmd-bili-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M776.192 239.552H640.8l61.344-61.344c10.592-10.592 10.592-25.376 0-35.968s-25.376-10.592-35.968 0L562.528 245.92H460.992l-103.68-103.648c-8.448-10.592-21.152-12.704-33.856-6.336-2.112 0-2.112 2.112-4.224 4.224-10.592 10.592-10.592 25.376 0 35.968l63.456 63.456H247.296c-74.048 0-135.392 61.344-135.392 135.392V711.36c0 71.936 61.344 133.28 135.392 133.28h21.152c0 25.376 21.152 44.416 44.416 44.416s44.416-21.152 44.416-44.416H670.4c2.112 25.376 23.264 44.416 48.672 42.304a45.504 45.504 0 0 0 42.304-42.304h16.928c74.048 0 135.392-61.344 135.392-135.392V372.864c-2.112-74.048-63.456-133.28-137.504-133.28zm-4.256 522.56H255.712c-27.488 0-48.672-23.264-50.784-50.784l-2.112-342.72a51.52 51.52 0 0 1 50.784-50.784h516.224c27.488 0 48.672 23.264 50.784 50.784l2.112 342.72c-2.112 29.6-23.264 50.784-50.784 50.784zM422.88 434.176l12.704 63.456-169.248 31.744-12.704-63.456 169.248-31.744zm162.88 63.488l12.704-63.456 169.248 31.744-12.704 63.456-169.248-31.744zm33.856 133.28c0 2.112 0 6.336-2.112 8.448-10.592 23.264-33.856 38.08-61.344 40.192a59.456 59.456 0 0 1-44.416-21.152c-12.704 12.704-27.488 21.152-44.416 21.152a77.344 77.344 0 0 1-61.344-40.192c0-2.112-2.112-4.224-2.112-8.448 0-8.448 6.336-14.816 14.816-16.928h2.112c6.336 0 10.592 2.112 12.704 8.448 0 0 16.928 23.264 31.744 23.264 29.632 0 29.632-25.376 46.528-44.416 19.04 21.152 19.04 44.416 46.528 44.416 19.04 0 31.744-23.264 31.744-23.264 2.112-4.224 8.448-8.448 12.704-8.448 8.448-2.112 14.816 4.224 16.928 12.704v4.224h.032z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '点击复制',
			id: 'wmd-copy-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M817.521 690.221H766.6V333.78c0-40.735-35.644-76.38-76.38-76.38H333.779v-50.921H690.22c71.289 0 127.3 56.012 127.3 127.3V690.22z" fill="#9b9b9b"/><path d="M639.3 817.521H282.859c-40.735 0-76.38-35.644-76.38-76.38V384.7c0-40.735 35.644-76.38 76.38-76.38H639.3c40.735 0 76.38 35.644 76.38 76.38v356.441c0 40.735-35.644 76.38-76.38 76.38zm-356.441-458.28c-15.277 0-25.461 10.185-25.461 25.46v356.441c0 15.277 10.185 25.461 25.461 25.461H639.3c15.277 0 25.46-10.185 25.46-25.461V384.701c0-15.277-10.185-25.46-25.46-25.46H282.859z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '居中标题',
			id: 'wmd-mtitle-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M921.6 460.8H655.36c-20.48-61.44-76.8-102.4-143.36-102.4s-122.88 40.96-143.36 102.4H102.4c-30.72 0-51.2 20.48-51.2 51.2s20.48 51.2 51.2 51.2h266.24c20.48 61.44 76.8 102.4 143.36 102.4s122.88-40.96 143.36-102.4H921.6c30.72 0 51.2-20.48 51.2-51.2s-20.48-51.2-51.2-51.2zM512 563.2c-30.72 0-51.2-20.48-51.2-51.2s20.48-51.2 51.2-51.2 51.2 20.48 51.2 51.2-20.48 51.2-51.2 51.2z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '消息提示',
			id: 'wmd-message-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M669.133 281.6a307.456 307.456 0 0 0-428.083 0 295.68 295.68 0 0 0 31.744 445.44v27.085a29.645 29.645 0 0 0 59.29 0v-40.397a30.72 30.72 0 0 0-1.076-7.526 30.157 30.157 0 0 0-12.442-18.893 236.493 236.493 0 0 1-104.345-196.403c0-130.56 110.745-236.8 241.305-236.8s241.306 106.24 241.306 236.8c0 6.195 0 12.646-.666 19.097a235.52 235.52 0 0 1-104.96 178.176 30.362 30.362 0 0 0-12.646 32.205v33.946a29.645 29.645 0 0 0 59.29 0V727.5a299.213 299.213 0 0 0 76.185-84.838 291.277 291.277 0 0 0 40.96-128c.666-7.936.87-15.872.87-23.808A295.117 295.117 0 0 0 669.134 281.6zM513.485 880.333l-118.938.87a29.747 29.747 0 1 0 .615 59.443l118.937-.87a29.747 29.747 0 1 0-.614-59.443zm89.958-75.981h-298.24a29.645 29.645 0 0 0 0 59.238h298.24a29.645 29.645 0 0 0 0-59.238z" fill="#666"/><path d="M485.325 342.118a29.542 29.542 0 0 0-29.645-29.798A178.688 178.688 0 0 0 277.3 490.906a29.645 29.645 0 0 0 59.289 0A118.938 118.938 0 0 1 455.68 371.968a29.747 29.747 0 0 0 29.645-29.85z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '便条按钮',
			id: 'wmd-anote-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.222 227.556A113.778 113.778 0 0 1 1024 341.333v341.334a113.778 113.778 0 0 1-113.778 113.777H113.778A113.778 113.778 0 0 1 0 682.667V341.333a113.778 113.778 0 0 1 113.778-113.777h796.444zm0 56.888H113.778a56.889 56.889 0 0 0-56.89 56.89v341.333a56.889 56.889 0 0 0 56.89 56.889h796.444a56.889 56.889 0 0 0 56.89-56.89V341.334a56.889 56.889 0 0 0-56.89-56.889zm-627.996 85.448c25.486 0 45.938 5.83 61.326 17.521 15.388 11.663 23.097 29.327 23.097 52.964 0 14.336-3.527 26.624-10.553 36.835-7.026 10.24-17.067 18.12-30.066 23.695v.796c17.522 3.698 30.806 12.004 39.822 24.889 9.017 12.885 13.54 29.013 13.54 48.384 0 11.15-1.991 21.56-5.973 31.26-3.983 9.672-10.24 18.063-18.717 25.088-8.505 7.026-19.37 12.601-32.654 16.726-13.284 4.124-29.07 6.172-47.388 6.172H144.043v-284.33h138.183zm345.258 0V412.9h-90.396v241.322H487.31V412.9h-89.998v-43.008h230.172zm83.627 0l129.82 209.464h.797V369.892h47.388v284.33h-52.565L707.13 445.156h-1.195v209.066h-47.388v-284.33h52.565zM281.828 524.8H193.82v88.804h88.008c15.132 0 26.88-3.926 35.242-11.748 8.363-7.822 12.544-18.916 12.544-33.252 0-14.08-4.181-24.888-12.544-32.455-8.362-7.566-20.11-11.349-35.242-11.349zm-6.77-114.29H193.82v78.45h81.238c11.946 0 21.902-3.385 29.866-10.155s11.947-16.526 11.947-29.269c0-14.336-3.584-24.434-10.752-30.265-7.168-5.831-17.522-8.76-31.061-8.76z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '多彩按钮',
			id: 'wmd-abtn-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M360 651c-74.1 0-134.3-60.3-134.3-134.3 0-74.1 60.3-134.3 134.3-134.3s134.3 60.3 134.3 134.3c0 74-60.2 134.3-134.3 134.3zm0-204.6c-38.8 0-70.3 31.5-70.3 70.3S321.2 587 360 587s70.3-31.5 70.3-70.3-31.5-70.3-70.3-70.3z" fill="#9b9b9b"/><path d="M666.9 778.9H360c-70 0-135.9-27.3-185.4-76.8S97.8 586.7 97.8 516.7s27.3-135.9 76.8-185.4S290 254.5 360 254.5h306.9c70 0 135.9 27.3 185.4 76.8s76.8 115.4 76.8 185.4-27.3 135.9-76.8 185.4-115.3 76.8-185.4 76.8zM360 318.5c-109.3 0-198.2 88.9-198.2 198.2S250.7 714.9 360 714.9h306.9c109.3 0 198.2-88.9 198.2-198.2s-88.9-198.2-198.2-198.2H360z" fill="#9b9b9b"/></svg>'
		},
		{
			title: '时间轴',
			id: 'wmd-timeline-button',
			svg: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path d="M312.584 565.872V444.936c33.752-14.064 56.248-45 56.248-81.56s-22.504-67.504-56.248-78.752V138.376c0-16.872-11.248-28.128-28.128-28.128s-28.128 11.248-28.128 28.128v146.248c-33.752 11.248-56.248 42.184-56.248 78.752s22.504 67.504 56.248 78.752v120.936c-33.752 11.248-56.248 42.184-56.248 78.752s22.504 67.504 56.248 78.752v149.064c0 16.872 11.248 28.128 28.128 28.128s28.128-11.248 28.128-28.128V723.376c33.752-11.248 56.248-42.184 56.248-78.752s-22.496-67.496-56.248-78.752zm-28.128-230.624c16.872 0 28.128 11.248 28.128 28.128s-11.248 28.128-28.128 28.128-28.128-11.248-28.128-28.128 11.256-28.128 28.128-28.128zm0 337.504c-16.872 0-28.128-11.248-28.128-28.128s11.248-28.128 28.128-28.128 28.128 11.248 28.128 28.128-11.248 28.128-28.128 28.128zm476.416 8H489.656c-16.952 0-33.904 11.248-33.904 28.128s13.56 28.128 33.904 28.128H760.88c16.952 0 33.904-11.248 33.904-28.128s-13.56-28.128-33.912-28.128zM828.696 287h-339.04c-16.952 0-33.904 11.248-33.904 28.128s13.56 28.128 33.904 28.128h339.04c16.944 0 33.896-11.248 33.896-28.128S849.032 287 828.696 287zm-67.824 168.752c16.952 0 33.904-11.248 33.904-28.128s-13.552-28.128-33.904-28.128H489.656c-16.952 0-33.904 11.248-33.904 28.128s13.56 28.128 33.904 28.128h271.216zm67.824 112.496h-339.04c-16.952 0-33.904 11.248-33.904 28.128s13.56 28.128 33.904 28.128h339.04c16.944 0 33.896-11.248 33.896-28.128s-13.56-28.128-33.896-28.128z" fill="#9b9b9b"/></svg>'
		}
	];

	/* 用于设置插入到文章的短代码内容 */
	function getInsertTextById(id) {
		let str = '';
		switch (id) {
			case 'wmd-card-button':
				str = `\n{card-default width="100%" label="默认标题"}\n ${$('#text').selectionRange() ? $('#text').selectionRange() : '默认内容'}\n{/card-default}\n`;
				break;
			case 'wmd-hide-button':
				str = `\n{hide}\n ${$('#text').selectionRange() ? $('#text').selectionRange() : '默认隐藏的内容'}\n{/hide}\n`;
				break;
			case 'wmd-mlist-button':
				str = `\n{music-list id="网易云歌单ID" width="100%" height="450px" autoplay="autoplay" /}\n`;
				break;
			case 'wmd-music-button':
				str = `\n{music id="网易云歌曲ID" width="100%" height="86px" autoplay="autoplay" /}\n`;
				break;
			case 'wmd-html-button':
				str = `\n!!!\n<span class="test">Hello Joe</span>\n<style>\n  .test { color: #ff6800 }\n</style>\n!!!\n`;
				break;
			case 'wmd-title-button':
				str = `\n# 一级标题\n## 二级标题\n### 三级标题\n#### 四级标题\n##### 五级标题\n###### 六级标题\n`;
				break;
			case 'wmd-table-button':
				str = `\n| 左对齐 | 右对齐 | 居中对齐 |\n| :-----| ----: | :----: |\n| 单元格 | 单元格 | 单元格 |\n`;
				break;
			case 'wmd-snippet-button':
				str = `\n\`\`\`php\necho 'Hello Joe';\n\`\`\`\n`;
				break;
			case 'wmd-code-button':
				str = ` \`${$('#text').selectionRange() ? $('#text').selectionRange() : '行内代码'}\` `;
				break;
			case 'wmd-nbsp-button':
				str = '　';
				break;
			case 'wmd-delete-button':
				str = ` ~~${$('#text').selectionRange() ? $('#text').selectionRange() : '删除线'}~~ `;
				break;
			case 'wmd-task-button':
				str = `{x} 任务已完成\n{ } 任务未完成`;
				break;
			case 'wmd-dplayer-button':
				str = `\n{dplayer src="M3U8或MP4地址" /}\n`;
				break;
			case 'wmd-bili-button':
				str = `\n{bilibili bvid="哔哩哔哩的Bvid" /}\n`;
				break;
			case 'wmd-copy-button':
				str = `{copy text="默认文本"}${$('#text').selectionRange() ? $('#text').selectionRange() : '点击复制'}{/copy}`;
				break;
			case 'wmd-mtitle-button':
				str = `\n{mtitle}${$('#text').selectionRange() ? $('#text').selectionRange() : '居中标题'}{/mtitle}\n`;
				break;
			case 'wmd-message-button':
				str = `\n{message type="success|info|warning|error（选择其一）"}${$('#text').selectionRange() ? $('#text').selectionRange() : '提示内容'}{/message}\n`;
				break;
			case 'wmd-anote-button':
				str = `{anote icon="Font Awesome图标" href="跳转地址" type="secondary|success|warning|error|info（选择其一）"}${$('#text').selectionRange() ? $('#text').selectionRange() : '便条按钮'}{/anote}`;
				break;
			case 'wmd-abtn-button':
				str = `{abtn icon="Font Awesome图标" color="颜色值" href="跳转地址" radius="圆角（最大17.5px）"}${$('#text').selectionRange() ? $('#text').selectionRange() : '多彩按钮'}{/abtn}`;
				break;
			case 'wmd-timeline-button':
				str = `\n{timeline}\n {timeline-item}时间轴内容{/timeline-item}\n {timeline-item}时间轴内容{/timeline-item}\n{/timeline}\n`;
				break;
		}
		return str;
	}
	/* 此处无需修改 */
	items.forEach(_ => {
		let item = $(`<li class="wmd-button" id="${_.id}" title="${_.title}">${_.svg}</li>`);
		item.on('mousedown', () => $('#text').insertContent(getInsertTextById(_.id)));
		$('#wmd-button-row').append(item);
	});
	$.ajax({
		url: 'https://cdn.jsdelivr.net/gh/HaoOuBa/Joe@master/assets/json/joe.owo.json',
		success(res) {
			let barStr = '';
			let scrollStr = '';
			for (let key in res) {
				barStr += `<div class="item" data-index="${res[key].index}">${key}</div>`;
				scrollStr += `
                    <ul class="scroll" data-index="${res[key].index}">
                        ${res[key].container.map(_ => `<li class="item" data-text="${_.data}">${_.icon}</li>`).join('')} 
                    </ul>
                `;
			}
			$('#wmd-button-row').append(`
                <li class="wmd-button joe_owo__contain" title="插入表情">
                    <div class="seat">
                        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 160c194.4 0 352 157.6 352 352S706.4 864 512 864 160 706.4 160 512s157.6-352 352-352zm0 64a288 288 0 1 0 0 576 288 288 0 0 0 0-576zm122.08 326.624l61.024 19.264a191.488 191.488 0 0 1-28.736 56.288A191.744 191.744 0 0 1 512 704a191.744 191.744 0 0 1-179.648-124.096l-3.456-10.016 61.024-19.264a127.19 127.19 0 0 0 19.136 37.44A127.744 127.744 0 0 0 512 640a127.744 127.744 0 0 0 119.264-81.408l2.816-8zM400 352a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm224 0a48 48 0 1 1 0 96 48 48 0 0 1 0-96z" fill="#9b9b9b"/></svg>
                    </div>
                    <div class="box">
                        ${scrollStr}
                        <div class="bar">${barStr}</div>
                    </div>
                </li>
            `);
			$(document).on('click', function () {
				$('.joe_owo__contain .box').removeClass('show');
			});
			$('.joe_owo__contain .seat').on('click', function (e) {
				e.stopPropagation();
				$(this).siblings('.box').toggleClass('show');
			});
			$('.joe_owo__contain .box .bar .item').on('click', function (e) {
				e.stopPropagation();
				$(this).addClass('active').siblings().removeClass('active');
				const scrollIndx = '.joe_owo__contain .box .scroll[data-index="' + $(this).attr('data-index') + '"]';
				$(scrollIndx).show().siblings('.scroll').hide();
			});
			/* 点击表情，向文本框插入内容 */
			$('.joe_owo__contain .scroll .item').on('click', function () {
				const text = $(this).attr('data-text');
				$('#text').insertContent(text);
			});
			/* 默认激活第一个 */
			$('.joe_owo__contain .box .bar .item').first().click();
		}
	});
});
