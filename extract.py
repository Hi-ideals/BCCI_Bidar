import urllib.request, re

req = urllib.request.Request('https://bccibidar.in/mc-members/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find all team members
# The structure is roughly:
# <div class="thim-ekit-team__thumbnail"> <img src="..." ...> ...
# <div class="thim-ekit-team__member-name">Name</div> ...
# <div class="thim-ekit-team__member-position">Role</div>

blocks = html.split('thim-ekit-team__thumbnail')
for block in blocks[1:]:
    img_match = re.search(r'<img.*?src="(.*?)".*?>', block)
    name_match = re.search(r'thim-ekit-team__member-name.*?>(.*?)<', block, re.DOTALL)
    role_match = re.search(r'thim-ekit-team__member-position.*?>(.*?)<', block, re.DOTALL)
    
    img = img_match.group(1) if img_match else ''
    name = name_match.group(1).strip() if name_match else ''
    role = role_match.group(1).strip() if role_match else ''
    
    if name:
        print(f"{{ name: \"{name}\", role: \"{role}\", image: \"{img}\" }},")
