from rest_framework import routers
from .views import PostViewSet

router = routers.SimpleRouter()
router.register('api/accounts', PostViewSet, 'accounts')

urlpatterns = router.urls
